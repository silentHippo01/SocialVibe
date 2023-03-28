import { FC, memo } from "react";
import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from 'shared/assets/icon/theme-light.svg';
import DarkIcon from 'shared/assets/icon/theme-dark.svg';
import { Theme } from "app/providers/ThemeProvider/index";
import { Button, ButtonTheme } from "../../Button/Button";

interface ThemeSwitcherProps{
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({className}) => {
    const {theme, toggleTheme} = useTheme();
    console.log(theme);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            >
            {theme == Theme.DARK? <DarkIcon/> : <LightIcon />}
        </Button>
    );
});
 // className={classNames(cls.themeSwitcher, {}, [className])}