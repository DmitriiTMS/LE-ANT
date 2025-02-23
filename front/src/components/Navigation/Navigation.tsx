import { LinkPage } from "../LinkPage/LinkPage"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Roles } from "../../types/types";

import styles from './Navigation.module.css';

export const Navigation = () => {
    const { user } = useSelector((state: RootState) => state.usersProfileSlice);

    const linkPage = [
        { id: 1, path: "/", pathTitle: "Главная" },
        { id: 2, path: "/admin", pathTitle: "Админ" },
    ];

    const filteredLinks = linkPage.filter((item) => {
        if (item.path === "/admin") {
            return user && user.role?.toUpperCase() === Roles.ADMIN;
        }
        return true;
    });

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationUl}>
                {filteredLinks.map((item) => (
                    <LinkPage key={item.id} path={item.path} pathTitle={item.pathTitle} />
                ))}
            </ul>
        </nav>
    );
};