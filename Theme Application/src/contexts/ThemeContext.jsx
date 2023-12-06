import { createContext , useContext , useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}

export {ThemeProvider , useThemeContext};