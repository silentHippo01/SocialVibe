import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
// import AvatarIMG from './StorybookPepe.jpg';
import AvatarIMG from './techik.jpg';

export default {
  title: 'shared/Avatar.tsx',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const PepeM = Template.bind({});
PepeM.args = {
  src: AvatarIMG,
  size: 150,
};

export const PepeL = Template.bind({});
PepeL.args = {
  src: AvatarIMG,
  size: 250,
};

export const PepeXL = Template.bind({});
PepeXL.args = {
  src: AvatarIMG,
  size: 350,
};
