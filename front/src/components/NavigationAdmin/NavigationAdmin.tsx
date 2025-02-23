import { NavLink } from "react-router-dom"

import styles from './NavigationAdmin.module.css';

export const NavigationAdmin = () => {
    return (
        <nav className={styles.navigateAdmin}>
            <ul>
                <li className={styles.linkLi}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.linkPageActive : styles.linkPage}
                        to="/admin/users" >
                        Все пользователи
                    </NavLink>
                </li>
                <li className={styles.linkLi}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.linkPageActive : styles.linkPage}
                        to="/admin/judges" >
                        Все судьи
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}