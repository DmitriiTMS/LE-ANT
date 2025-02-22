import { ButtonAuthorization } from "../ButtonAuthorization/ButtonAuthorization";
import { Navigation } from "../Navigation/Navigation"
import { UserProfile } from "../UserProfile/UserProfile";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { getUserId, resetUser } from '../../store/slices/users/usersSlice';

import styles from './Header.module.css';

export const Header = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.usersSlice);
    const id = localStorage.getItem("id");

    const logoutProfile = () => {
        localStorage.removeItem("id");
        dispatch(resetUser())
    }

    useEffect(() => {
        if (id) {
            dispatch(getUserId(Number(id)));
        }
    }, [dispatch, id])

    return (
        <header>
            <div className="container">
                <div className={styles.headerNav}>
                    <Navigation />
                    {user ? <UserProfile user={user} logoutProfile={logoutProfile}/> : <ButtonAuthorization />}
                </div>
            </div>
        </header>
    )
} 