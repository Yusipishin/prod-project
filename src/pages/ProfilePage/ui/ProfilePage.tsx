import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import {
    EditableProfileCard,
    getProfileError,
} from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const authData = useSelector(getUserAuthData);
    const profileError = useSelector(getProfileError);

    const content = (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{authData?.id !== id && <ProfileRating profileId={id} />}</>
    );

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames('', {}, [className])}
        >
            <VStack max gap="16">
                <EditableProfileCard id={id} />
                {!profileError && content}
            </VStack>
        </Page>
    );
});

export default ProfilePage;
