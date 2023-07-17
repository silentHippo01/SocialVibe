import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {
    to: '/',
  }
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;'
};
