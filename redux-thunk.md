# redux-thunk

- redux
- react-redux
- redux-thunk・・・・middleware　※reduxアプリにリクエストをするためのヘルパーミドルウェア


- 流れ：
1. component rendered
2. componentDidMount => action creator => API request
3. API がdataを返す => reducerがactionをみてdata on payloadを返す => new state object生成 <br>
   ※JSONオブジェクト<br>
4. state更新をトリガーに => redux/react-reduxが再render


## 関連
- [外部API](https://github.com/endw0901/react_typescript/blob/main/api.md)
