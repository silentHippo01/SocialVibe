import { useTranslation } from "react-i18next";
import cls from './ArticleCodeBlockComponent.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "@/shared/ui/Code";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {

    const {
        className,
        block,
    } = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [])}>
            <Code text={block.code} />
        </div>
    );
});