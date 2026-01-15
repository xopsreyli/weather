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

const getIsKilometers = () => {
    const savedValue = localStorage.getItem("isKilometers");
    if (savedValue) {
        return savedValue === '1';
    }

    return true
}

const getisPascal = () => {
    const savedValue = localStorage.getItem("isPascal");
    if (savedValue) {
        return savedValue === '1';
    }

    return true
}
const SettingsProvider = ({children}: SettingsProviderProps) => {
    const [isCelsius, setIsCelsius] = useState<boolean>(getIsCelsius());
    const [isKilometers, setIsKilometers] = useState<boolean>(getIsKilometers())
    const [isPascal, setIsPascal] = useState<boolean>(getisPascal())

    useEffect(() => {
        localStorage.setItem('isCelsius', isCelsius ? '1' : '0')
    }, [isCelsius]);

    useEffect(() => {
        localStorage.setItem('isKilometers', isKilometers ? '1' : '0');
    }, [isKilometers]);

    useEffect(() => {
        localStorage.setItem('isPascal', isPascal ? '1' : '0');
    }, [isPascal]);

    const settingsContextValue: SettingsContextType = useMemo(() => ({
        isCelsius: isCelsius,
        setIsCelsius: setIsCelsius,
        isKilometers: isKilometers,
        setIsKilometers: setIsKilometers,
        isPascal: isPascal,
        setIsPascal: setIsPascal,
    }), [isCelsius, isKilometers, isPascal]);

    return (
        <SettingsContext value={settingsContextValue} >
            {children}
        </SettingsContext>
    );
};

export default SettingsProvider;