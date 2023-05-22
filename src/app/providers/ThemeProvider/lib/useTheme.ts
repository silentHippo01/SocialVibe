import {useContext} from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY, ThemeContextProps } from './ThemeContext';


interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult{

    const {theme, setTheme} = useContext(ThemeContext)
    
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme){
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN: 
                newTheme = Theme.DARK;
                break;
            default: 
                newTheme = Theme.LIGHT;
        }
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