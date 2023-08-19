import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popup';
import Notification from 'shared/assets/icon/Notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <>
            <Popover
                className={cls.NotificationButton}
                direction={'bottom left'}
                trigger={(
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={Notification} inverted />
                    </Button>
                )}>
                <NotificationList className={cls.notifications} />
            </Popover>
        </>
    );
});