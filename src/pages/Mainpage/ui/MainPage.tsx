import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Input } from 'shared/ui/Input/Input';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  }

  return (
      <Page>
          {t('Главная страница')}
      </Page>
  ); 
};

export default MainPage;
