import React, {useEffect, useMemo, useState} from 'react';
import {SettingsContext, type SettingsContextType} from "./Settings.ts";

type SettingsProviderProps = {
    children: React.ReactNode;
}

const getIsCelsius = () => {
    const savedValue = localStorage.getItem("isCelsius");

    if (savedValue) {
        return savedValue === '1';
    }

    return true;
}

const SettingsProvider = ({children}: SettingsProviderProps) => {
    const [isCelsius, setIsCelsius] = useState<boolean>(getIsCelsius());

    useEffect(() => {
        localStorage.setItem('isCelsius', isCelsius ? '1' : '0')
    }, [isCelsius]);

    const settingsContextValue: SettingsContextType = useMemo(() => ({
        isCelsius: isCelsius,
        setIsCelsius: setIsCelsius,
    }), [isCelsius]);

    return (
        <SettingsContext value={settingsContextValue} >
            {children}
        </SettingsContext>
    );
};

export default SettingsProvider;