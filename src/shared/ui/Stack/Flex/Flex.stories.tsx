import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
   
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
   children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};


export const Column = Template.bind({});
Column.args = {
   direction: 'column',
   children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};


export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};


export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    align: 'end',
    direction: 'column',
    children: (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>four</div>
        <div>five</div>
    </>
   )
};

