import { useEffect, useState, useMemo, useDebugValue } from "react";

import { useValueRef } from "./useValueRef";

/**
 * 
 * @param {*} getApiPromise 
 * @param {*} callback 
 * @param {*} deps 
 * @returns 
 */

const useApi = (getApiPromise, callback, deps) => {
    const [state, setState] = useState({pending: false});

    const getPromiseRef = useValueRef(getApiPromise);
    const callbackRef = useValueRef(callback);

    useEffect(() => {
        if (state.abort) {
            state.abort()
        }
        let abort = null;
        const getPromise = getPromiseRef.current;
        const callback = callbackRef.current;
        if (getPromise) {
            const abortController = window.AbortController ? new AbortController() : null;
            abort = () => {
                abort = null;
                if (abortController) {
                    abortController.abort();
                }
            };
            (async() => {
                if (callback) {
                    callback(null, null)
                }
                const promise = getPromise(abortController?.signal ?? null);
                if (!promise) {
                    abort = null;
                    setState({pending: false});
                    return;
                }
    
                let result;
                try {
                    setState({pending: true});
                    result = await promise;
                }
                catch (error) {
                    if (abort) {
                        abort = null;
                        if (error?.name === 'AbortError') {
                            setState({pending: false})
                        }
                        else {
                            setState({pending: false, error});
                            if (callback) {
                                callback(null, error);
                            }
                        }
                    }
                    return;
                }
    
                if (abort) {
                    abort = null;
                    setState({pending: false});
                    if (callback) {
                        callback(result);
                    }
                }
            })();
        }
        else {
            setState({pending: false});
        }
        return () => {
            if (abort) {
                abort();
            }
        };
    }, deps || []);

    const result = (useMemo(() => [state.pending, state.error], [state.pending, state.error]));

    useDebugValue(result);

    return result;
}

export {useApi};