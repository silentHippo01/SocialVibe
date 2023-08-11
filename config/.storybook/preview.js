import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT)); //этот декоратор можно подключать не глобально, а к конкретной сторис
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);