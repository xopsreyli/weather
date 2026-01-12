import React, {createContext, useContext} from "react";

export type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used with the ThemeContext');
    }

    return context
}