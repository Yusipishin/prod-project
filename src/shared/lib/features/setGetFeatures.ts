import { FeatureFlags } from '@/shared/types/featureFlags';

// фичи не меняются в ходе сессии
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(featureFlag: keyof FeatureFlags) {
    return featureFlags[featureFlag];
}
