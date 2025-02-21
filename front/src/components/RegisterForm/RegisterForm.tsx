import { InputFormAuth } from '../InputFormAuth/InputFormAuth';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
    return (
        <>
            <div className={styles.registerFormBlock}>
                <form className={styles.registerForm}>
                    <div className={styles.registerFormInputBlock}>
                        <InputFormAuth type="text" placeholder="Введите своё имя" />
                    </div>
                    <div className={styles.registerFormInputBlock}>
                        <InputFormAuth type="email" placeholder="Введите свой email" />
                    </div>
                    <div className={styles.registerFormInputBlock}>
                        <InputFormAuth type="text" placeholder="Введите имя в Instagram" />
                    </div>
                    <div className={styles.registerFormInputBlock}>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select}>
                                <option>Выберите роль</option>
                                <option value="1">Участник</option>
                                <option value="2">Судья</option>
                            </select>
                        </div>

                    </div>
                    <div className={styles.registerFormBtnBlock}>
                        <button disabled className={styles.registerFormBtn} type="submit">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </>
    )
}