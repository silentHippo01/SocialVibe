import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  return (
      <div>
          {t('О сайте')}
      </div>
  );
};

export default AboutPage;
