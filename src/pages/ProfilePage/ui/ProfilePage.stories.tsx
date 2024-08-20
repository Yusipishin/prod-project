import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'pages/ProfilePage',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    avatar: AvatarImg,
                    username: 'admin',
                    age: 22,
                    country: Country.Armenia,
                    lastname: 'Yus',
                    first: 'Al',
                    city: 'Ukhta',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};
