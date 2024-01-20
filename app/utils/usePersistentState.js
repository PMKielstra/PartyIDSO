import { useState, useEffect } from 'react';

const timeoutKey = "timeout";
const timeoutLength = 24 * 60 * 60 * 1000;

export default function usePersistentState(initialValue, keyStr) {
    const [state, setState] = useState(initialValue);
    useEffect(() => {
        const timeout = window.localStorage.getItem(timeoutKey)
        if (timeout == null || Date.now() > timeout){
            window.localStorage.clear();
            window.localStorage.setItem(timeoutKey, Date.now() + timeoutLength);
        }
        setState(JSON.parse(window.localStorage.getItem(keyStr)) || initialValue)
    }, [])
    return [state, (newVal) => {
        setState(newVal);
        window.localStorage.setItem(keyStr, JSON.stringify(newVal));
    }];
}