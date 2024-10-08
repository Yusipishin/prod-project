import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export { StoreProvider, createReduxStore, ReduxStoreWithManager };

export type { AppDispatch, StateSchema, ThunkConfig, StateSchemaKey };
