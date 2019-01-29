import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import logger from '../middleware/logger';
import generateId from '../middleware/generate-id';
import api from '../middleware/api';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        generateId,
        api,
        logger
    )
);

const store = createStore(reducer, enhancer)

//DEV ONLY
window.store = store

export default store
