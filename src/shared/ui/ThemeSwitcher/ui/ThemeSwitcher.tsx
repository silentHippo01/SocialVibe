import { FC } from "react";
import { useTheme } from "../../../../app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "./../../../lib/classNames/classNames";
import LightIcon from './../../../assets/icon/theme-light.svg';
import DarkIcon from './../../../assets/icon/theme-dark.svg';
import { Theme } from "../../../../app/providers/ThemeProvider/index";
import { Button, ThemeButton } from "../../Button/Button";

interface ThemeSwitcherProps{
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();
    console.log(theme);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            >
            {theme == Theme.DARK? <DarkIcon/> : <LightIcon />}
        </Button>
    );
};
 // className={classNames(cls.themeSwitcher, {}, [className])}