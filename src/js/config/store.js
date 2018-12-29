// Vendor Imports
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Local Imports
import reducers from '../reducers';

// Middlewares
const middlewares = [thunk];

// Development Redux Logger Middleware
if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
  });
  middlewares.push(loggerMiddleware);
}

// Store
const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

// Export
export default store;
