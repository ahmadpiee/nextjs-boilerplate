import storage from '@redux/storage';
import { combineReducers } from 'redux';
import { authReducers } from './authReducers';

export const rootReducer = combineReducers({
    authReducers,
});

export const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [''],
};
