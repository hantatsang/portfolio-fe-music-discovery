import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import rootSaga from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

/**
 * Create Redux store
 */
export default function configureStore() {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
    compose;

  return {
    ...createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(...middlewares)
      ),
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  }
};
