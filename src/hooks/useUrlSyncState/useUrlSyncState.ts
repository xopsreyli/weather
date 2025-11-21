import {useCallback, useEffect, useState} from "react";
import {useSearchParams} from "react-router";

const useUrlSyncState = <T>(
    name: string,
    defaultValue: T,
    parse: (value: string | null) => T | null,
    serialize: (value: T) => string
): [T, (value: T) => void] => {
    const [searchParams, setSearchParams] = useSearchParams()
    const paramsValue: T | null = parse(searchParams.get(name))
    const [state, setState] = useState<T>(paramsValue || defaultValue)

    useEffect(() => {
        const value = parse(searchParams.get(name)) || defaultValue

        if (state !== value) {
            setState(value)
        }
    }, [state, searchParams, name, defaultValue, parse])

    const handleSetState = useCallback((value: T) => {
        setState(value)
        setSearchParams(searchParams => {
            searchParams.set(name, serialize(value))
            return searchParams
        })
    }, [name, setSearchParams, serialize])

    return [state, handleSetState]
}

export default useUrlSyncState