import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


import history from '../helpers/history';

import reducer from './reducers/';


const logger = createLogger({
    collapsed: true,
    duration: true,
    diff: true
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            logger
        )
    )
)

export default store;
