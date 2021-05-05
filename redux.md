# Redux
- state管理ライブラリ = Redux

- サイクル：Action Creator => Action => dispatch => Reducers => State
- Reducers => 【Provider】 => App => 【Connect】 => SongList

- サンプル：[songs]()


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
