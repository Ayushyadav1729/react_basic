import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

//custom hook bana liya
export default function useTheme(){
    return useContext(ThemeContext)
}