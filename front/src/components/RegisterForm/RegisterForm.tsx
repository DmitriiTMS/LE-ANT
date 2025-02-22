import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputFormAuth } from '../InputFormAuth/InputFormAuth';
import { IRegisterForm, ROLE_OBJ, Roles } from '../../types/types';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { addUser } from '../../store/slices/users/usersSlice';

import styles from './RegisterForm.module.css';


export const RegisterForm = (
    { handleCancel }: { handleCancel: () => void }
) => {

    const dispatch = useDispatch<AppDispatch>();
    const { error, loading } = useSelector((state: RootState) => state.usersSlice);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<IRegisterForm>({
        mode: "onChange",
    });

    const submitRegisterForm: SubmitHandler<IRegisterForm> = async (data: IRegisterForm) => {
        let user;
        try {
            ROLE_OBJ.forEach((role) => {
                if (data.role == role.roleEnum) {
                    user = {
                        ...data,
                        role: role.roleNameServer,
                        images: []
                    };
                }
            });
            await dispatch(addUser(user!)).unwrap();
            if (!loading) {
                handleCancel()
                reset();
            }

        } catch (err) {
            return err
        }
    };

    useEffect(() => {
        const selectElement = document.querySelector(`.${styles.select}`) as HTMLSelectElement;
        if (selectElement) {
            selectElement.addEventListener('change', (event) => {
                const target = event.target as HTMLSelectElement;
                if (target) {
                    const selectedOption = target.options[target.selectedIndex];
                    if (selectedOption.value !== "") {
                        selectedOption.style.color = "black";
                        selectElement.style.color = "black";
                    } else {
                        selectedOption.style.color = "";
                        selectElement.style.color = "";
                    }
                }
            });
        }
    }, [isValid]);

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
                        <div className={styles.selectWrapper}>
                            <select  {...register("role", {
                                required: "Вы не выбрали роль",
                            })} className={styles.select}>
                                <option className={styles.checkRole} value="">Выберите роль</option>
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
                    <div className={styles.registerFormInputBlock}>
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

                    <div className={styles.registerFormBtnBlock}>
                        <button
                            disabled={!isValid}
                            className={styles.registerFormBtn}
                            type="submit">
                            Зарегистрироваться
                        </button>
                    </div>
                    <div>{loading && "Loading..."}</div>
                    <div className={styles.danger}>{error && "При регистрации произошла ошибка"}</div>
                </form>
            </div>
        </>
    )
}