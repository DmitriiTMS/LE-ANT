export interface IUser{
    id?: number;
    name: string;
    email: string;
    instagramName: string;
    password: string;
    role: string;
    images: string[]
}

export interface IUsersState {
    users: IUser[];
    user: IUser | null | undefined;
    loading: boolean;
    error: string | null;
}