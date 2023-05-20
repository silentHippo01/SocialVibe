import { FC, InputHTMLAttributes, memo, useEffect, useState } from "react";
import cls from './Input.module.scss';
import { Mods, classNames } from "shared/lib/classNames/classNames";

//нужно чтобы не происходил конфликт типов
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if(autofocus){
            setIsFocused(true);
        }
    }, [setIsFocused]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder} > `}
                    </div>
                )
            }

            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                autoFocus={isFocused}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
})