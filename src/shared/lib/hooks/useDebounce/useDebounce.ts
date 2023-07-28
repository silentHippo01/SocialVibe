import { MutableRefObject, useCallback, useRef } from "react";

export function useDebounce(callback: (...args: any[]) => void, delay: number){
    const timer = useRef() as MutableRefObject<any>;  

    return useCallback((...args: any[]) => {
        //очищаем таймаут, если уже какой-то таймер сохранен в реф
        if(timer.current){
            clearTimeout(timer.current);
        }
        //внутри таймера вызываем callback
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }, [callback, delay])
}