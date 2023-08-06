import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
          <Input value={value} onChange={onChange} placeholder="placeholder"/>
          <div>ffeffefeef</div>
          <div>ffeffefeef</div>
          <div>ffeffefeef</div>
          <ListBox 
              defaultValue={'Выберите значение'}
              onChange={(value: string) => {}}
              value={undefined}
              items={[
                {value: '1', content: '1'},
                {value: '2', content: '2', disabled: true},
                {value: '3', content: '3'},
              ]}
          /> 
          <div>ffeffefeef</div>
          <div>ffeffefeef</div>
          <div>ffeffefeef</div>
          <div>ffeffefeef</div>
      </Page>
  ); 
};

export default MainPage;
