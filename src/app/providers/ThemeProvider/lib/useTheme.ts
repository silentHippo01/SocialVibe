import {useContext} from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY, ThemeContextProps } from './ThemeContext';


interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult{

    const {theme, setTheme} = useContext(ThemeContext)
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }
}


//кастомный хук

// была ошибка setTheme(newTheme) - Cannot invoke an object which is possibly 'undefined'.
// исправлена setTheme?.(newTheme)