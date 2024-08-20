import { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof AboutPage> = {
    component: AboutPage,
    title: 'pages/AboutPage',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({})],
};
