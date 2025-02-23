
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ButtonAuthorization } from "../ButtonAuthorization/ButtonAuthorization";
import { Navigation } from "../Navigation/Navigation";
import { UserProfile } from "../UserProfile/UserProfile";
import {resetUserProfile } from "../../store/slices/getProfile/getProfileSlice";
import { resetUser } from "../../store/slices/users/usersSlice";
import styles from './Header.module.css';

import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.usersSlice);
    const { user: userProfile, loading } = useSelector((state: RootState) => state.usersProfileSlice);


    const logoutProfile = () => {
        localStorage.removeItem("user");
        dispatch(resetUserProfile());
        dispatch(resetUser());
        navigate('/')
    };

    if (loading) {
        return
    }

    const currentUser = user || userProfile;

    return (
        <header>
            <div className="container">
                <div className={styles.headerNav}>
                    <Navigation />
                    {
                        currentUser ?
                            <UserProfile user={currentUser} logoutProfile={logoutProfile} />
                            :
                            <ButtonAuthorization />
                    }
                </div>
            </div>
        </header>
    );
};