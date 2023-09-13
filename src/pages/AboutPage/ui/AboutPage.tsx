
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page/Page';

const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  return (
    <Page data-testid={'AboutPage'}>
      {t('О сайте')}

    </Page>
  );
};

export default AboutPage;
