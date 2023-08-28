import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import LightIcon from '@/shared/assets/icon/theme-light.svg';
import DarkIcon from '@/shared/assets/icon/theme-dark.svg';
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Theme } from "@/shared/const/Theme";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme();
    console.log(theme);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme == Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
 // className={classNames(cls.themeSwitcher, {}, [className])}