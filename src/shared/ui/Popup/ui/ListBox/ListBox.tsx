import { Listbox as HListBox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react';
import cls from './ListBox.module.scss';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from './../../styles/const'
import popupCls from '../../styles/popup.module.scss';


export interface ListBoxItem {
//    id: number;
   value: string;
   content: ReactNode;
   disabled?: boolean;
}

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


export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        value,
        defaultValue,
        onChange,
        className,
        readonly,
        direction = 'bottom left',
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
            className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
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
                                    [popupCls.active]: active,
                                    [popupCls.disabled]: item.disabled,
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
