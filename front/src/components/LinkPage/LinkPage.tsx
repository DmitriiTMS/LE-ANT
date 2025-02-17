import React from "react"
import { NavLink } from "react-router-dom"

import styles from './LinkPage.module.css';

interface ILinkPage {
    path: string
    pathTitle: string
}
export const LinkPage: React.FC<ILinkPage> = ({ path, pathTitle }) => {
    return (
        <li className={styles.linkPageLi}>
            <NavLink
                className={({isActive}) => isActive ? styles.linkPageActive : styles.linkPage}
                to={path} >
                {pathTitle}
            </NavLink>
        </li>
    )
}