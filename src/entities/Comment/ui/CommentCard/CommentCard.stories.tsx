import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {action} from '@storybook/addon-actions'
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
    comment: 
        {
            id: '1',
            text: 'hello world',
            user: {id: '1', username: 'SmiledPepe'},
        },
};


export const Loading = Template.bind({});
Loading.args = {
    comment: 
        {
            id: '1',
            text: 'hello world',
            user: {id: '1', username: 'SmiledPepe'},
        },
        isLoading: true,
};


