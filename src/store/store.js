import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer
});

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, composeWithDevTools());
const store = createStore(rootReducer, composedEnhancers);

export default store;