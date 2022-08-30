import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { persistConfig, rootReducer } from '@redux/reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const isNotProd = process.env.NODE_ENV !== 'production';

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            thunk,
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logger),
});

const makeStore = () => store;

export const persistor = persistStore(store);
export const wrapper = createWrapper(
    makeStore,
    isNotProd ? { debug: false } : { debug: false }
);
