import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// reducers, action creators, middle-waresを1箇所にまとめてexportしてcomponentで使用する
export const store = createStore(reducers, {}, applyMiddleware(thunk));
