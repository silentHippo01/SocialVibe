import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  }

  return (
    <Page data-testid='MainPage'>
      {t('Главная страница')}
    </Page>
  );
};

export default MainPage;
