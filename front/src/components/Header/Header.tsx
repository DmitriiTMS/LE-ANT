import { ButtonAuthorization } from "../ButtonAuthorization/ButtonAuthorization";
import { Navigation } from "../Navigation/Navigation"


import styles from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.headerNav}>
                    <Navigation />
                    <ButtonAuthorization/>
                </div>

            </div>
        </header>
    )
} 