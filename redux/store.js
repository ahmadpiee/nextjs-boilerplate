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
import { isDevelopment } from '@utils/helpers/envProcess';

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) => {
        let middleware = defaultMiddleware({
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
        });
        if (isDevelopment) {
            middleware = middleware.concat(logger);
        }
        return middleware;
    },
});

const makeStore = () => store;
export const persistor = persistStore(store);
export const wrapper = createWrapper(
    makeStore,
    isDevelopment ? { debug: true } : { debug: false }
);
