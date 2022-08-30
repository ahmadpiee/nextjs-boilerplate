import storage from '@redux/storage';
import { combineReducers } from 'redux';
import { userReducers, userPersistConfig } from './userReducers';
import { persistReducer } from 'redux-persist';

export const rootReducer = combineReducers({
    userReducers: persistReducer(userPersistConfig, userReducers), // only error don't want to be persist
});

export const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [''],
};
