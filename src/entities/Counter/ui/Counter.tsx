import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { add, decrement, increment } = useCounterActions();

    const handleInc = () => increment();
    const handleDec = () => decrement();
    const handleAddFive = () => add(5);

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleInc} data-testid="increment-btn">
                {t('Incr')}
            </Button>
            <Button onClick={handleAddFive} data-testid="increment-btn5">
                {t('AddFive')}
            </Button>
            <Button onClick={handleDec} data-testid="decrement-btn">
                {t('Decr')}
            </Button>
        </div>
    );
};
