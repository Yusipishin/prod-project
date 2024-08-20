import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import IconImage from '../../assets/tests/storybookIcon.svg';

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'shared/Icon',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        Svg: IconImage,
    },
};

export const Inverted: Story = {
    args: {
        Svg: IconImage,
        inverted: true,
    },
};
