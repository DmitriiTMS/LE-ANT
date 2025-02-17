import { LinkPage } from "../LinkPage/LinkPage"

import styles from './Navigation.module.css';

const linkPage = [
    { id: 1, path: "/", pathTitle: "Главная" },
    { id: 2, path: "/admin", pathTitle: "Админ" },
]

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationUl}>
                {
                    linkPage.map((item) => {
                        return (
                            <LinkPage
                                key={item.id}
                                path={item.path}
                                pathTitle={item.pathTitle} />
                        )
                    })
                }
            </ul>
        </nav>
    )
}