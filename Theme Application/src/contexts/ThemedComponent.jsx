import React from "react";
import { useThemeContext } from "./ThemeContext";

const ThemeComponent = () => {
    const {theme} = useThemeContext();

    return (
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg mt-4 border border-solid border-black rounded`}>
            <h3>Use the Below Button</h3>           
            <h2>to Change the Theme</h2>
        </div>
    )
}

export default ThemeComponent;