import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// state, reducerの戻りinterface:RepositoriesStateを理解している
// => RootStateで渡す
const reducers = combineReducers({
  // key:value => RootStateでこのdataを持つことををタイプ定義として渡す
  repositories: repositoriesReducer,
});

export default reducers;

// redux storeのtype定義を新たに作る
//   => components側で理解できるようにするため
export type RootState = ReturnType<typeof reducers>;
