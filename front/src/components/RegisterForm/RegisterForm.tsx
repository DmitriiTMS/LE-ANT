import { SubmitHandler, useForm } from 'react-hook-form';
import { InputFormAuth } from '../InputFormAuth/InputFormAuth';
import { IRegisterForm, ROLE_OBJ, Roles } from '../../types/types';

import styles from './RegisterForm.module.css';



export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterForm>({
        mode: "onChange",
    });

    const submitRegisterForm: SubmitHandler<IRegisterForm> = (
        data: IRegisterForm
    ) => {
        ROLE_OBJ.forEach((role) => {
            if (data.role == role.roleEnum) {
                console.log({
                    ...data,
                    role: role.roleNameServer,
                });

                // mutate({
                //   ...data,
                //   role: role.roleNameServer,
                // });
            }
        });
    };
    return (
        <>
            <div className={styles.registerFormBlock}>
                <form className={styles.registerForm} onSubmit={handleSubmit(submitRegisterForm)}>
                    <div className={styles.registerFormInputBlock}>
                        <InputFormAuth
                            placeholder="Укажите Имя"
                            type="text"
                            registerName="name"
                            requiredMessage="Имя обязательно к заполнению"
                            minLengthValue={1}
                            minLengthMessage="Имя должно состоять минимум из одного символа"
                            maxLengthValue={40}
                            maxLengthMessage="Максимальное значение имени не может содержать более 40 символов"
                            register={register}
                            error={errors.name}
                        />
                    </div>
                    <div className={styles.registerFormInputBlock}>
                        <InputFormAuth
                            placeholder="Укажите Имя в Instagram"
                            type="text"
                            registerName="instagramName"
                            requiredMessage="Имя в Instagram обязательно к заполнению"
                            minLengthValue={1}
                            minLengthMessage="Имя в Instagram должно состоять минимум из одного символа"
                            maxLengthValue={40}
                            maxLengthMessage="Максимальное значение имя в Instagram не может содержать более 40 символов"
                            register={register}
                            error={errors.instagramName}
                        />
                    </div>
                    <div className={styles.registerFormInputBlock}>
                        <InputFormAuth placeholder="Укажите email"
                            type="email"
                            registerName="email"
                            requiredMessage="Email обязателен к заполнению"
                            register={register}
                            optionPattern={{
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Введите верный формат email ",
                            }}
                            error={errors.email} />
                    </div>
                    <div>
                        <InputFormAuth placeholder="Придумайте пароль"
                            type="password"
                            registerName="password"
                            requiredMessage="Пароль обязателен к заполнению"
                            minLengthValue={6}
                            minLengthMessage="Пароль должен содержать минимум 6 символов"
                            maxLengthValue={20}
                            maxLengthMessage="Пароль не может содержать более 20 символов"
                            register={register}
                            error={errors.password} />
                    </div>
                    <div className={styles.registerFormInputBlock}>
                        <div className={styles.selectWrapper}>
                            <select  {...register("role", {
                                required: "Вы не выбрали роль",
                            })} className={styles.select}>
                                <option value="">Выберите роль</option>
                                {ROLE_OBJ.map((role, index) => (
                                    <option key={index} value={role.roleEnum}>
                                        {role.roleEnum === Roles.PARTICIPANT
                                            ? role.roleNameClient
                                            : role.roleEnum === Roles.JUDGE
                                                ? role.roleNameClient
                                                : null}
                                    </option>
                                ))}
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