import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, IUsersState } from '../../../types/userSliceTypes';


export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(`http://localhost:4200/users`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('Errrrrror');
            }
        }
    },
)

export const addUser = createAsyncThunk(
    'users/addUser',
    async (user: IUser, thunkAPI) => {
        try {
            await axios.post('http://localhost:4200/users', user)
            thunkAPI.dispatch(getAllUsers())
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || 'Ошибка при добавлении пользователя');
            } else if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('Неизвестная ошибка');
            }
        }
    }
)


const initialState: IUsersState = {
    users: [],
    loading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export default usersSlice.reducer;