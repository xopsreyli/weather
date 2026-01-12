import React, {useEffect, useMemo, useState} from "react";
import {ThemeContext, type ThemeContextType} from "./Theme.ts";
import {DARK, LIGHT} from "../../enums/theme/theme.ts";

const getTheme: () => string = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? LIGHT : DARK
}

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>(getTheme());

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const themeContextValue: ThemeContextType = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext value={themeContextValue}>
            {children}
        </ThemeContext>
    );
};

export default ThemeProvider;