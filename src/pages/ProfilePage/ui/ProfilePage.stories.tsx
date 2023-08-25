import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country/model/types/Country';
import { Currency } from '@/entities/Currency/model/types/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'andrew',
      lastname: 'novikov',
      avatar: avatar,
      age: 21,
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Москва'
    }
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'andrew',
      lastname: 'novikov',
      avatar: avatar,
      age: 21,
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Москва'
    }
  }
})];