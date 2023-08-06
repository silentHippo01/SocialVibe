import { Listbox as HListBox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react';
import cls from './ListBox.module.scss';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
//    id: number;
   value: string;
   content: ReactNode;
   disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom'; // в какую сторону выпадает список 

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange:(value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        value,
        defaultValue,
        onChange,
        className,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [
        mapDirectionClass[direction]
    ];

    return (
        <HStack gap='4'>
             {label && <span>{`${label} >`}</span>}
             <HListBox 
            disabled={readonly}
            as={'div'} //какой тег использовать в качестве обертки
            className={classNames(cls.ListBox, {}, [className])}
            value={value} 
            onChange={onChange}
        >
            
            <HListBox.Button 
                className={cls.trigger}
                disabled={readonly}
            >
                <Button disabled={readonly}>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
            <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                {items?.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                         {({active, selected}) => (
                            <li
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                })}
                            >
                                {selected && '!!!'}
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
        </HStack>
    );
};
