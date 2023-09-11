import { useEffect, useRef } from "react";

/**
 * 
 * @param {T} value - The value we want to set the ref.current to
 * @returns - The ref containing the value
 */

const useValueRef = (value) => {
    const ref = useRef(value);

    ref.current = value;

    useEffect(() => () => {
        ref.current = null;
    }, []);

    return ref;
}

export {useValueRef};