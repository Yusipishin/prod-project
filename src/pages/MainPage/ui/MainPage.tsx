import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
