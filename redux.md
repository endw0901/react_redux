# Redux
- state管理ライブラリ = Redux

- サイクル：Action Creator => Action => dispatch => Reducers => State
- Reducers => 【Provider】 => App => 【Connect】 => SongList

- サンプル：[songs](https://github.com/endw0901/react_typescript/tree/main/songs/src)


## typescript
- [reducers](https://github.com/endw0901/react_typescript/blob/main/reducers.md)


## connectの()()

```
function connect() {
  return function() {
    return 'Hello';
  }
}


connect()()
// 結果：Hello
```

## サンプル
- サンプル：[songs](https://github.com/endw0901/react_typescript/tree/main/songs/src)
```
// App
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  
// reducers
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  
// SongList
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
```

## ツール
- [redux-devtools-extention](https://github.com/zalmoxisus/redux-devtools-extension)
- [Redux Devtools Extensionを使った時のこの感動を伝えたい](https://qiita.com/daiki7nohe/items/fa0f496eebb0980f86da)

```
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
```
