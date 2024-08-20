import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ArticleEditPage> = {
    component: ArticleEditPage,
    title: 'pages/ArticleEditPage',
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    decorators: [StoreDecorator({})],
};
