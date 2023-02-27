import { FC } from "react";
import Modal from "shared/ui/Modal/Modal";
import cls from './LoginModal.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import LoginForm from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <div>
            <Modal
                className={classNames(cls.LoginModal, {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
            >
                <LoginForm />
            </Modal>
        </div>
    );
};
