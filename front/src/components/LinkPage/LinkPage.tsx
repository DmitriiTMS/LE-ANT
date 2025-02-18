import React from "react"
import { NavLink } from "react-router-dom"

import { Button } from 'antd';

import styles from './LinkPage.module.css';

interface ILinkPage {
    path: string
    pathTitle: string
}
export const LinkPage: React.FC<ILinkPage> = ({ path, pathTitle }) => {
    return (
        <li className={styles.linkPageLi}>
            <Button type="link" size="large">
                <NavLink
                    className={({isActive}) => isActive ? styles.linkPageActive : styles.linkPage}
                    to={path} >
                    {pathTitle}
                </NavLink>
            </Button>
        </li>
    )
}