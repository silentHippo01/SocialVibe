import { FC, useState } from 'react';
import { Button } from './../../../../shared/ui/Button/Button';
import { classNames } from './../../../../shared/lib/classNames/classNames';
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from './../../../../shared/ui/ThemeSwitcher/index';
import { LangSwitcher } from './../../../../widgets/LangSwitcher';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div 
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
        
        <Button onClick={onToggle}>
            Toggle
        </Button>

        <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang}/>
        </div>

        </div>
    );
};
