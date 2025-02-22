import { SubmitHandler, useForm } from 'react-hook-form';
import { InputFormAuth } from '../InputFormAuth/InputFormAuth';
import { ILoginForm } from '../../types/types';

import styles from './LoginForm.module.css';

export const LoginForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<ILoginForm>({
        mode: "onChange",
    });

    const submitRegisterForm: SubmitHandler<ILoginForm> = (data: ILoginForm) => {
        console.log(data);
        reset();
    };


    return (
        <div className={styles.loginFormBlock}>
            <form className={styles.loginForm} onSubmit={handleSubmit(submitRegisterForm)}>
                <div className={styles.loginFormInputBlock}>
                    <InputFormAuth
                        placeholder="Укажите email"
                        type="email"
                        registerName="email"
                        requiredMessage="Email обязателен к заполнению"
                        register={register}
                        optionPattern={{
                            value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Введите верный формат email ",
                        }}
                        error={errors.email}
                    />
                </div>
                <div className={styles.loginFormInputBlock}>
                    <InputFormAuth placeholder="Введите пароль"
                        type="password"
                        registerName="password"
                        requiredMessage="Пароль обязателен к заполнению"
                        minLengthValue={6}
                        minLengthMessage="Пароль должен содержать минимум 6 символов"
                        maxLengthValue={12}
                        maxLengthMessage="Пароль не может содержать более 12 символов"
                        register={register}
                        error={errors.password} />
                </div>
                <div className={styles.loginFormBtnBlock}>
                    <button
                        disabled={!isValid}    
                        className={styles.loginFormBtn}
                        type="submit">
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}