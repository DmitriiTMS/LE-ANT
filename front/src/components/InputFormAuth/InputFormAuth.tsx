import { IInputForm } from '../../types/types';
import { FieldValues } from "react-hook-form";

import styles from './InputFormAuth.module.css';


export const InputFormAuth = <T extends FieldValues> ({
    placeholder,
    type,
    registerName,
    requiredMessage,
    minLengthValue = 6, 
    minLengthMessage = '', 
    maxLengthValue = 12, 
    maxLengthMessage = '', 
    register,
    error,
    optionPattern}: IInputForm<T>) => {
    return (
        <>
            <input
                className={styles.formInput}
                placeholder={placeholder}
                type={type}
                {...register(registerName, {
                    pattern: optionPattern,
                    required: requiredMessage,
                    minLength: {
                        value: minLengthValue,
                        message: minLengthMessage,
                    },
                    maxLength: {
                        value: maxLengthValue,
                        message: maxLengthMessage,
                    },
                })}
            />

            {error && (
                <div className={styles.danger}>
                    {error.message as string}
                </div>
            )}
        </>


    )
}