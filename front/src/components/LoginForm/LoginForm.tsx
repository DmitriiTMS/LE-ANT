import { InputFormAuth } from '../InputFormAuth/InputFormAuth';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    return (
        <div className={styles.loginFormBlock}>
            <form className={styles.loginForm}>
                <div className={styles.loginFormInputBlock}>
                    <InputFormAuth type='email' placeholder='Введите email' />
                </div>
                <div className={styles.loginFormInputBlock}>
                    <InputFormAuth type='password' placeholder='Введите пароль' />
                </div>
                <div className={styles.loginFormBtnBlock}>
                    <button disabled className={styles.loginFormBtn} type="submit">Войти</button>
                </div>
            </form>
        </div>
    )
}