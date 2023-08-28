import { useTranslation } from 'react-i18next';
import { Article } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icon/list-24-24.svg';
import TilesIcon from '@/shared/assets/icon/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '../../model/consts/consts';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TilesIcon,
    }, 
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    }
]

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {

    const {
        className,
        view,
        onViewClick
    } = props;


    // функция onClick принимает event, нужно еще прокинуть новый вид
    // для этого onClick возвращает другую функцию, в которую прокидывает newView
    // onClick принимает новый вид, вызывается, возвращает другую функцию, которая попадает в слушатель события
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className, cls[view]])}>
          {viewTypes.map(viewType => (
            <Button 
                theme={ButtonTheme.CLEAR} 
                onClick={onClick(viewType.view)}
                key={viewType.view}
               
            >
                <Icon 
                    Svg={viewType.icon}  
                    className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                />
            </Button>
          ))}
        </div>
    );
};
