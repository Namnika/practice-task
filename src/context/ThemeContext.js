import React, { createContext, useState } from "react";

export const ThemeContext = createContext('dark'); // create theme context using react context api


export const ThemeProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState('dark');

    const handleTheme = () => {
        setCurrentTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, handleTheme }}>
            {children}
        </ThemeContext.Provider>


    )
}









