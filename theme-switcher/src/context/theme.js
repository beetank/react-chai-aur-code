import { useContext, createContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},    
});

export const ThemeProvider = ThemeContext.Provider; 

const useTheme = () => {
    console.log(window.matchMedia('(prefers-color-scheme: dark').matches);
    return useContext(ThemeContext);   
}

export default useTheme;