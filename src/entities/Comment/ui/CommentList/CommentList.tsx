import { memo } from 'react';
import cls from './CommentList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { IComment } from 'entities/Comment/model/types/Comment';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {

    const {
        className,
        isLoading,
        comments,
    } = props;

    const { t } = useTranslation();

    if(isLoading){
        return (
            <div className={classNames(cls.CommentList, {}, [])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment}/>
                ))
                : <Text title={t("Никто не оставил комментарий")}/>
            }
        </div>
    );
});
