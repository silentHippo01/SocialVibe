import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const AdminPanelPage = () => {
    const { t } = useTranslation('AdminPanelPage');

    return (
        <Page>
            {t("админ панель")}
        </Page>
    );
};

export default AdminPanelPage;
