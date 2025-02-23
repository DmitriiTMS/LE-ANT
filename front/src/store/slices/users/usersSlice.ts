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

export const getUserId = createAsyncThunk(
    'users/getUserId',
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.get<IUser>(`http://localhost:4200/users/${id}`)
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


// export const getUserSlug = createAsyncThunk(
//     'users/getUserSlug',
//     async (slug: string, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser>(`http://localhost:4200/users/${slug}`)
//             return response.data
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 return thunkAPI.rejectWithValue(error.response?.data || error.message);
//             } else {
//                 return thunkAPI.rejectWithValue('Errrrrror');
//             }
//         }
//     },
// )


export const addUser = createAsyncThunk(
    'users/addUser',
    async (user: IUser, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:4200/users', user);
            localStorage.setItem("user", JSON.stringify(response.data))
            return response.data;
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

export const deleteUserId = createAsyncThunk(
    'users/deleteUserId',
    async (id: number, thunkAPI) => {
        try {
            await axios.delete<IUser>(`http://localhost:4200/users/${id}`)
            thunkAPI.dispatch(getAllUsers())
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('Errrrrror');
            }
        }
    },
)



const initialState: IUsersState = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.user = null;
        },
    },
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
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(getUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserId.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // .addCase(getUserSlug.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(getUserSlug.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.user = action.payload;
            // })
            // .addCase(getUserSlug.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload as string;
            // })

            .addCase(deleteUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUserId.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { resetUser } = usersSlice.actions;
export default usersSlice.reducer;