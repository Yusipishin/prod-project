import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'shared/Input',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: 'random value',
    },
};
