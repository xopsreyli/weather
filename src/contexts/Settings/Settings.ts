import React, {createContext, useContext} from "react";

export type SettingsContextType = {
    isCelsius: boolean;
    setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

export const useSettings = () => {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error('useSettings must be used with the SettingsContext');
    }

    return context
}