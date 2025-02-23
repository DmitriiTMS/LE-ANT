export interface IUser{
    id?: number;
    name: string;
    email: string;
    instagramName: string;
    password: string;
    role: string;
    images: string[],
    accessAllowed?: boolean;
}

export interface IUsersState {
    users: IUser[];
    user: IUser | null | undefined;
    loading: boolean;
    error: string | null;
}

export interface IUsersStateProfile {
    user: IUser | null | undefined;
    loading: boolean;
    error: string | null;
}