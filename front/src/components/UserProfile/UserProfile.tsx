import { IUser } from '../../types/userSliceTypes';
import styles from './UserProfile.module.css';

interface IUserProfile {
    user: IUser;
    logoutProfile: () => void
}

export const UserProfile: React.FC<IUserProfile> = ({ user, logoutProfile }) => {
    return (
        <div className={styles.profileBlock}>
            <button
                onClick={logoutProfile}
                className={styles.profileBtn}
            >Выйти
            </button>
            <span>Привет, {user.name}</span>
        </div>
    )
}