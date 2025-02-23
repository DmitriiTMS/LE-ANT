import React, { useEffect } from 'react';
import { Space, Table, Button } from 'antd';
import type { TableProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { deleteUserId, getAllUsers } from '../../store/slices/users/usersSlice';
import { Link } from 'react-router-dom';

interface IUserPage {
    id?: number;
    name: string;
    email: string;
    instagramName: string;
    role: string;
    accessAllowed?: boolean;
    slug?: string
}


export const UsersPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector((state: RootState) => state.usersSlice)


    const columns: TableProps<IUserPage>['columns'] = [
        {
            title: 'Номер п/п',
            dataIndex: 'number',
            render: (_, __, index) => <span>{index + 1}</span>,
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            render: (text, record) => (
                <Link to={`/admin/users/${record.id}`}>{text}</Link>
            ),
        },
        {
            title: 'Почта',
            dataIndex: 'email',
        },
        {
            title: 'Имя в Instagram',
            dataIndex: 'instagramName',
        },
        {
            title: 'Роль',
            dataIndex: 'role',
            render: (text) => {
                switch (text) {
                    case 'PARTICIPANT':
                        return <span>Участник</span>;
                    case 'JUDGE':
                        return <span>Судья</span>;
                    default:
                        return <span>Администратор</span>;
                }
            },
            
        },
        {
            title: 'Доступ',
            dataIndex: 'accessAllowed',
            render: (accessAllowed) => accessAllowed ? <span>Разрешен</span> : <span>Запрещён</span>,
        },
        {
            title: 'Действие',
            render: (_, record) => (
                <Space size="middle">
                    <Button color="danger" variant="solid" onClick={() => handleDelete(record.id!)}>Удалить</Button>
                </Space>
            ),
        },
    ];

    const handleDelete = (userId: number) => {
        dispatch(deleteUserId(userId))
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Table<IUserPage>
            columns={columns}
            dataSource={users.map(user => ({ ...user, key: user.id }))}
            loading={loading}
        />
    );
};