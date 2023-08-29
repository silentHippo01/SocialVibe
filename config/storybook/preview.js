import {StyleDecorator} from 'src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from 'src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from 'src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { addDecorator } from '@storybook/react';
import { Theme } from 'src/shared/const/Theme';
import { SuspenseDecorator } from 'src/shared/config/storybook/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen', 
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
      { name: 'dark', class: Theme.DARK, color: '#000000' },
      { name: 'green', class: Theme.DARK, color: '#ffb005' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT)); //этот декоратор можно подключать не глобально, а к конкретной сторис
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);