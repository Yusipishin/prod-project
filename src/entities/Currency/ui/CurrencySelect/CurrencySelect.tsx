import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;

    return (
        <ListBox
            className={className}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            value={value}
            onChange={onChange}
            readonly={readonly}
            direction="top right"
        />
    );
});
