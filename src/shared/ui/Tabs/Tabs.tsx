import { ReactNode, memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './Tabs.module.scss';
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps{
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {

    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;


    //такой способ нужен чтобы прокидывать внутрь не event, а tab
    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {
                tabs.map((tab, index) => (
                    <Card 
                        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        className={cls.tab} 
                        key={index}
                        onClick={clickHandle(tab)}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
});