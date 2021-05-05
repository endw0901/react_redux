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

