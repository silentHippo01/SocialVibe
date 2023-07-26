import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import cls from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ScrollSaveActions, getScroll, getScrollByPath } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {

    const {
        className,
        children,
        onScrollEnd
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log('SCROLL');
        dispatch(ScrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef} 
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef}></div>
        {/* div, доходя до которого вызывается колбек */}
        </section>
    );
}) ;