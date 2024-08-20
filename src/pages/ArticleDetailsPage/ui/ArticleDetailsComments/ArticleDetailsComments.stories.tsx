import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ArticleDetailsComments> = {
    component: ArticleDetailsComments,
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({})],
};
