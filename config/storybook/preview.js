import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { addDecorator } from '@storybook/react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
            { name: 'light', class: Theme.LIGHT, color: '#fff' },
            { name: 'dark', class: Theme.DARK, color: '#000' },
            { name: 'red', class: Theme.RED, color: '#ff351f' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
