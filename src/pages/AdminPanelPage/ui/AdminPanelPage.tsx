import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/ui/Page/Page";

const AdminPanelPage = () => {
    const { t } = useTranslation('AdminPanelPage');

    return (
        <Page data-testid="AdminPanelPage">
            {t("админ панель")}
        </Page>
    );
};

export default AdminPanelPage;
