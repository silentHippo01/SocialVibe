import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popup';
import Notification from 'shared/assets/icon/Notification-20-20.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={Notification} inverted />
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={cls.NotificationButton}
                    direction={'bottom left'}
                    trigger={trigger}>
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer} >
                    <NotificationList />
                </Drawer >
            </MobileView>
        </div>
    );
});