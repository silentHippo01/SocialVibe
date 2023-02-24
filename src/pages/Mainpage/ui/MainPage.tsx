import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation('mainPage');

  return (
      <div>
          {t('Главная страница')}
          {t('Курс ульби тестирование бейбл плагина ')}
          <Counter />
      </div>
  );
};

export default MainPage;
