import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void; // вызывается когда был пересечен определенный элемент
    triggerRef: MutableRefObject<HTMLElement>; // реф на который нужно триггериться
    wrapperRef: MutableRefObject<HTMLElement>;

}

export function useInfiniteScroll({callback, triggerRef, wrapperRef}: UseInfiniteScrollOptions){
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if(callback){
            const options = {
                root: wrapperElement, //элемент в котором находится скролл, то есть page-wrapper
                rootMargin: '0px',
                threshold: 1.0,
            };
    
            observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting){
                    callback();
                }
            }, options);
    
            observer.observe(triggerElement) //за чем мы следим 
        }

        return () => {
            if(observer && triggerElement){
                // eslint disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        }
    }, [callback, triggerRef, wrapperRef]);
}