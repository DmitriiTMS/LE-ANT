import { useState } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';

import styles from './Authorization.module.css';
import { RegisterForm } from '../RegisterForm/RegisterForm';

export const Authorization = (
    {handleCancel}:{handleCancel: () => void}
) => {

    const [view, setView] = useState(false);

    const openLogin = () => {
        setView(false)
    }

    const openRegister = () => {
        setView(true)
    }

    return (
        <div className={styles.authorization}>
            <div className={styles.authorizationLink}>
                <div className={styles.authorizationBtnBlock}>
                    <button className={`${styles.authorizationBtn} ${!view && styles.active}`} onClick={openLogin}>Вход</button>
                </div>
                <div className={styles.authorizationBtnBlock}>
                    <button className={`${styles.authorizationBtn} ${view && styles.active}`} onClick={openRegister}>Регистрация</button>
                </div>
            </div>
            {view ? <RegisterForm handleCancel={handleCancel}/> : <LoginForm />}
        </div>
    )
}