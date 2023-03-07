import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   title: 'Title lorem ipsun',
   text: 'Text Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
};

export const onlyTitle = Template.bind({});
Primary.args = {
   title: 'Title lorem ipsun',
};

export const onlyText = Template.bind({});
Primary.args = {
    text: 'Text Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
};


export const Error = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Error error error',
    theme: TextTheme.ERROR,
};


export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
   title: 'Title lorem ipsun',
   text: 'Text Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
   title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]




