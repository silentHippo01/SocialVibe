import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  }

  return (
      <div>
          {t('Главная страница')}
          <Input value={value} onChange={onChange} placeholder="placeholder"/>
      </div>
  ); 
};

export default MainPage;
