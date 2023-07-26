import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void; // вызывается когда был пересечен определенный элемент
    triggerRef: MutableRefObject<HTMLElement>; // реф на который нужно триггериться
    wrapperRef: MutableRefObject<HTMLElement>;

}

export function useInfiniteScroll({callback, triggerRef, wrapperRef}: UseInfiniteScrollOptions){
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        if(callback){
            const options = {
                root: wrapperRef.current, //элемент в котором находится скролл, то есть page-wrapper
                rootMargin: '0px',
                threshold: 1.0,
            };
    
            observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting){
                    callback();
                }
            }, options);
    
            observer.observe(triggerRef.current) //за чем мы следим 
        }

        return () => {
            if(observer){
                // eslint disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        }
    }, [callback, triggerRef, wrapperRef]);
}