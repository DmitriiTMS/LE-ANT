import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ButtonAuthorization } from "../ButtonAuthorization/ButtonAuthorization";
import { Navigation } from "../Navigation/Navigation";
import { UserProfile } from "../UserProfile/UserProfile";
import { getUserProfileId, resetUserProfile } from "../../store/slices/getProfile/getProfileSlice";
import { resetUser } from "../../store/slices/users/usersSlice";
import styles from './Header.module.css';

export const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { auth, user } = useSelector((state: RootState) => state.usersSlice);
    const { user: userProfile, loading } = useSelector((state: RootState) => state.usersProfileSlice);
    const [isInitialLoad, setIsInitialLoad] = useState(true); // Флаг для начальной загрузки

    const logoutProfile = () => {
        localStorage.removeItem("id");
        dispatch(resetUserProfile());
        dispatch(resetUser());
    };


    useEffect(() => {
        const id = localStorage.getItem("id");
        if (id && !user && !userProfile) {
            dispatch(getUserProfileId(Number(id))).finally(() => {
                setIsInitialLoad(false);
            });
        } else {
            setIsInitialLoad(false);
        }
    }, [dispatch, user, userProfile]);


    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "id") {
                if (event.newValue) {
                    dispatch(getUserProfileId(Number(event.newValue)));
                } else {
                    dispatch(resetUserProfile());
                    dispatch(resetUser());
                }
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [dispatch]);

    const currentUser = user || userProfile;

    if (isInitialLoad || loading) {
        return
    }

    return (
        <header>
            <div className="container">
                <div className={styles.headerNav}>
                    <Navigation />
                    {(auth || userProfile) ? (
                        currentUser ? (
                            <UserProfile user={currentUser} logoutProfile={logoutProfile} />
                        ) : null
                    ) : (
                        <ButtonAuthorization />
                    )}
                </div>
            </div>
        </header>
    );
};