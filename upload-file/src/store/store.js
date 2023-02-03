import { configureStore } from '@reduxjs/toolkit';
import { apiFile } from './api';


export const store = configureStore({
    reducer: {

        [apiFile.reducerPath]: apiFile.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([apiFile.middleware]),
});
