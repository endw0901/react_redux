import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducuer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
