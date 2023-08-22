import { Counter } from '@/entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popup/ui/Dropdown/Dropdown';
import { Input } from '@/shared/ui/Input/Input';
import { ListBox } from '@/shared/ui/Popup/ui/ListBox/ListBox';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/RatingCard';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  }

  return (
    <Page>
      {t('Главная страница')}
      <RatingCard
        title="Оцените статью"
        feedbackTitle='Оставьте комментарий к статье'
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
