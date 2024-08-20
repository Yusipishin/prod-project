import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    component: StarRating,
    title: 'shared/StarRating',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Selected: Story = {
    args: {
        selectedStars: 4,
    },
};
