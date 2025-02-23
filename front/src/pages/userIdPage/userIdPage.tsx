import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from "react";
import { getUserId } from "../../store/slices/users/usersSlice";


export const UserIdPage = () => {

    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.usersSlice);

    useEffect(() => {
        dispatch(getUserId(Number(id)))
    }, [dispatch, id])


    return (
        <div>{user?.name}</div>
    )
}