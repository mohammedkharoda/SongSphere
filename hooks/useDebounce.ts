import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, dealy?: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);
    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebounceValue(value);
        }, dealy);
        return () => {
            clearTimeout(handler);
        }
    }, [value, dealy]);
    return debounceValue;
}
