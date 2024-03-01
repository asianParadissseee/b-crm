import {useEffect, useState} from "react";

export function useDebounce(value: string, delay: number = 300): string {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const hanlder = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(hanlder)
    }, []);

    return debounced
}
