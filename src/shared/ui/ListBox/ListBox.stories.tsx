import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        Story => <div style={{ padding: 100 }}><Story /></div>
    ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '456',
    items: [
        { content: 'lorem ipsum dijijeiefe', value: '123' },
        { content: 'lorem ipsum dijijeiefe', value: '123' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: '456',
    direction: 'top left',
    items: [
        { content: 'lorem ipsum dijijeiefe', value: '123' },
        { content: 'lorem ipsum dijijeiefe', value: '123' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    value: '456',
    direction: 'top right',
    items: [
        { content: 'lorem ipsum dijijeiefe', value: '123' },
        { content: 'lorem ipsum dijijeiefe', value: '123' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: '456',
    direction: 'bottom left',
    items: [
        { content: 'lorem ipsum dijijeiefe', value: '123' },
        { content: 'lorem ipsum dijijeiefe', value: '123' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: '456',
    direction: 'bottom right',
    items: [
        { content: 'lorem ipsum dijijeiefe', value: '123' },
        { content: 'lorem ipsum dijijeiefe', value: '123' },
    ],
};
