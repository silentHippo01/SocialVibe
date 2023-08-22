import { memo, useState } from "react";
import cls from './StarRating.module.scss';
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import StarIcon from '@/shared/assets/icon/star-20-20.svg';
import { Icon } from "../Icon/Icon";

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(0); //на какую звезду направили курсор
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars)); //если кол-во звезд уже выбрано

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    }

    const mods: Mods = {
        // [cls.hovered]: currentStarsCount >= selectedStars,
        [cls.selected]: isSelected,
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, mods, [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
                    width={size}
                    height={size}
                    Svg={StarIcon}
                    key={starNumber}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
