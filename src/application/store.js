import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer/rootReducer';
import search from './middleware/searchSaga.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(search);

export default store;