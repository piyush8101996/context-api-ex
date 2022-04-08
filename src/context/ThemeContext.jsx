import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        isDark ? setIsDark(false): setIsDark(true);
    };

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>    
    );
};

export default ThemeProvider;