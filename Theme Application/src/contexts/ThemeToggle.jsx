import React from "react";
import { useThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme} = useThemeContext();

    return (
        <button className="bg-blue-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleTheme}>
            ! USE ME !
        </button>
    )
}

export default ThemeToggle;