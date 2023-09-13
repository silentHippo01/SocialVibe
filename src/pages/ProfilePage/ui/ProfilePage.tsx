import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/ui/Page/Page";
import { VStack } from "@/shared/ui/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { useParams } from "react-router-dom";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{ id: string }>();

    return (
        <Page data-testid={'ProfilePage'} className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;

//для асинхронных компонентов используется дефолтный экспорт