import {useCallback} from "react";
import {useSearchParams} from "react-router";

const useUrlSyncState = <T>(
    name: string,
    defaultValue: T,
    parse: (value: string | null) => T | null,
    serialize: (value: T) => string
): [T, (value: T) => void] => {
    const [searchParams, setSearchParams] = useSearchParams()

    const value: T = parse(searchParams.get(name)) || defaultValue

    const setValue = useCallback((newValue: T) => {
        setSearchParams(searchParams => {
            searchParams.set(name, serialize(newValue))
            return searchParams
        })
    }, [name, setSearchParams, serialize])

    return [value, setValue]
}

export default useUrlSyncState