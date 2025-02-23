import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/users/usersSlice'
import usersProfileSlice from './slices/getProfile/getProfileSlice'

export const store = configureStore({
    reducer: {
        usersSlice,
        usersProfileSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch