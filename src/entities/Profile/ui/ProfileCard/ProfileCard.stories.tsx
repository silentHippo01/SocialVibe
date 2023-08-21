import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ProfileCard} from './ProfileCard';
import { Country } from '@/entities/Country/model/types/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'andrew',
        lastname: 'novikov',
        avatar: avatar,
        age: 21,
        country: Country.Russia,
        currency: Currency.RUB,
        city: 'Москва'
    }
};

export const withError = Template.bind({});
withError.args = {
    error: 'true'
}

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
}