# redux-thunk

- [typescript版を使う](https://github.com/endw0901/react_typescript/blob/main/reducers.md)

- redux
- react-redux

- redux-thunk・・・・middleware　※reduxアプリにリクエストをするためのヘルパーミドルウェア<br>
※dispatchのたびによばれる<br>
※async問題のために主に使われる<br>
<br>

- 流れ：<br>
Action Creator => Action => dispatch => Middleware(redux-thunk) => Reducers => State<br>
<br>
1. component rendered => reducerはdefaultの空stateを返す<br>
2. componentDidMount => action creator => API request <br>
3. API がdataを返す => reducerがactionをみてdata on payloadを返す<br>
 => new state object生成 <br>
<br>
 ※Action Creatorはactionオブジェクトを(type property + payloadもち)返す or 関数も返せる<br>
 ※redux thunkは、actionだったらreducerへ、関数だったらdispatchへ、の制御をする：https://github.com/reduxjs/redux-thunk/blob/master/src/index.js <br>
 ※JSONオブジェクト<br>
 <br>
4. state更新をトリガーに => redux/react-reduxが再render <br>

## Redux Hooks
- [Redux Hooks によるラクラク dispatch & states](https://qiita.com/Ouvill/items/569384e5c8c7ce78f98e) <br>
※Redux Hooksでは、useSelector と useDispatch を使う <br>
※connectやmapStateToPropsの記載の箇所が不要となる
```
// Redux Hooksでは、不要となる
const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponents);
```

## 省略syntax
- [260.Shortened Syntax with Redux Thunk](https://www.udemy.com/course/react-redux/learn/lecture/12586868#overview)


- 1.リファクタリング前
```
export const fetchPosts = () => {
 return async (dispatch) => {
   const response = await jsonPlaceholder.get('/posts');
   
   dispatch({ type: 'FETCH_POSTS', payload: response })
 };
};

```

- 2.リファクタリング後 ※変数がなく、returnしかないとき => 外側の{}と、returnを省略できる
```
export const fetchPosts = () => 
  async (dispatch) => {
   const response = await jsonPlaceholder.get('/posts');
   
   dispatch({ type: 'FETCH_POSTS', payload: response })
 };

↓
↓

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
   
  dispatch({ type: 'FETCH_POSTS', payload: response })
};
```

## 関連
- [外部API](https://github.com/endw0901/react_typescript/blob/main/api.md)
- [reducers](https://github.com/endw0901/react_typescript/edit/main/reducers.md) <br>
※良いstate変更と、悪いstate変更<br>
