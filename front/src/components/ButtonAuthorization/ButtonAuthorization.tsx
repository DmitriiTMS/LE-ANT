import { useState } from 'react';
import { Button, Modal } from 'antd';
import { Authorization } from '../Authorization/Authorization';


export const ButtonAuthorization = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button onClick={showModal} color="purple" variant="solid">
                Вход / Регистрация
            </Button>
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Authorization handleCancel={handleCancel}/>
            </Modal>
        </div>
    )
}