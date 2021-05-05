# redux-thunk

- redux
- react-redux

- redux-thunk・・・・middleware　※reduxアプリにリクエストをするためのヘルパーミドルウェア<br>
※dispatchのたびによばれる<br>
※async問題のために主に使われる<br>
<br>

- 流れ：<br>
Action Creator => Action => dispatch => Middleware(redux-thunk) => Reducers => State<br>
<br>
1. component rendered <br>
2. componentDidMount => action creator => API request <br>
3. API がdataを返す => reducerがactionをみてdata on payloadを返す<br>
 => new state object生成 <br>
<br>
 ※Action Creatorはactionオブジェクトを(type property + payloadもち)返す or 関数も返せる<br>
 ※redux thunkは、actionだったらreducerへ、関数だったらdispatchへ、の制御をする：https://github.com/reduxjs/redux-thunk/blob/master/src/index.js <br>
 ※JSONオブジェクト<br>
 <br>
4. state更新をトリガーに => redux/react-reduxが再render <br>


## 関連
- [外部API](https://github.com/endw0901/react_typescript/blob/main/api.md)
- [reducers](https://github.com/endw0901/react_typescript/edit/main/reducers.md) <br>
※良いstate変更と、悪いstate変更<br>
