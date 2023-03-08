// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productSaga from './productSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

// export const store = createStore(rootReducer);

