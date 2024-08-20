import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';
import { Text, TextTheme } from '../Text';
import Img from '../../assets/tests/storybook.jpg';

const meta: Meta<typeof AppImage> = {
    component: AppImage,
    title: 'shared/AppImage',
};
export default meta;

type Story = StoryObj<typeof meta>;

const ImgFallback = <Skeleton width={500} height={250} />;
const ImgErrorFallback = <Text title="Error" theme={TextTheme.ERROR} />;

export const Primary: Story = {
    args: {
        src: Img,
        fallback: ImgFallback,
    },
};

export const Error: Story = {
    args: {
        errorFallback: ImgErrorFallback,
        src: 'htts:/fergcwergk',
    },
};
