import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from './Avatar.module.scss'
import { useMemo } from "react";
import { AppImage } from "../AppImage/AppImage";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const mods: Mods = {}

    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size])


    const errorFallback = <Skeleton width={32} height={32} border={'50%'} />
    const fallback = <Skeleton width={32} height={32} border={'50%'} />

    return (

        <AppImage
            fallback={errorFallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
