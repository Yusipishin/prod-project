import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EditableProfileCard, getProfileError } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Page } from '@/widgets/Page/Page';
import { ProfileRating } from '@/features/profileRating';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const authData = useSelector(getUserAuthData);
    const profileError = useSelector(getProfileError);

    const content = (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {authData?.id !== id && <ProfileRating profileId={id} />}
        </>
    );

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
                {!profileError && content}
            </VStack>
        </Page>
    );
});

export default ProfilePage;
