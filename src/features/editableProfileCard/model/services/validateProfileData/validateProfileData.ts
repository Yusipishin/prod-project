import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first,
        lastname,
        age,
        country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (age > 100 || age < 8 || !age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
