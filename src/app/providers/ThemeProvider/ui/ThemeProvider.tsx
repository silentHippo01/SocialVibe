import React, {useState, useMemo, FC, ReactNode} from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}


const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        children,
        initialTheme,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <div>
            <ThemeContext.Provider value={defaultProps}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;