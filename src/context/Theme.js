import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";


export const ThemeContext = createContext()





export const Theme = ({children}) =>{
    const localData = window.localStorage.getItem("theme")
    const [theme, setTheme ] = useState(localData || "light")


    const data = {
        theme,
        setTheme,
    }

    useEffect(() => {
        window.localStorage.setItem("theme", theme)
    },[theme]) 

    return <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>



}