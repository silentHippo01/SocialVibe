import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { IComment } from '@/entities/Comment/model/types/Comment';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui/Stack';

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
            <VStack gap={'16'} max className={classNames('', {}, [])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </VStack>
        )
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard isLoading={isLoading} key={comment.id} comment={comment}/>
                ))
                : <Text title={t("Никто не оставил комментарий")}/>
            }
        </VStack>
    );
});
