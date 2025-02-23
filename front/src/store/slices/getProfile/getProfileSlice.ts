import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, IUsersStateProfile } from '../../../types/userSliceTypes';

export const getUserProfileId = createAsyncThunk(
    'usersProfile/getUserProfileId',
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

const initialState: IUsersStateProfile = {
    user: null,
    loading: false,
    error: null,
};

export const usersProfileSlice = createSlice({
    name: 'usersProfile',
    initialState,
    reducers: {
        resetUserProfile: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfileId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserProfileId.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;                
            })
            .addCase(getUserProfileId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { resetUserProfile } = usersProfileSlice.actions;
export default usersProfileSlice.reducer;