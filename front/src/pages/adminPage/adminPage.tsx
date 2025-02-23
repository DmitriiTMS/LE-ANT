import { Outlet } from "react-router-dom";

import styles from './adminPage.module.css';
import { NavigationAdmin } from "../../components/NavigationAdmin/NavigationAdmin";

export const AdminPage = () => {
    return (
        <section className={styles.admin}>
            <div className="container">
                <h1 className={styles.adminTitle}>Страница Аминистратора</h1>
                <div className={styles.wrapperAdmin}>
                    <NavigationAdmin />
                    <div className={styles.adminPage}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    )
}