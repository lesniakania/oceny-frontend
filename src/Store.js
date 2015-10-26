import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerStateReducer } from 'redux-router';
import thunk from 'redux-thunk';
import SubmissionsListReducer from './reducers/SubmissionsListReducer';
import routes from './routes';

const reducers = combineReducers({
  submissions: SubmissionsListReducer,
  router: routerStateReducer
});

export function configureStore(initialState, createHistory, reduxReactRouter) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
  )(createStore);

  return createStoreWithMiddleware(reducers, initialState);
}
