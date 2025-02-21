import { IInputForm } from '../../types/types';

import styles from './InputFormAuth.module.css';

export const InputFormAuth: React.FC<IInputForm> = ({type, placeholder}) => {
    return (
        <input
            className={styles.formInput}
            type={type}
            placeholder={placeholder} />
    )
}