# constructor

- 公式ドキュメント：https://reactjs.org/docs/react-component.html#constructor
- [state](https://github.com/endw0901/react_typescript/blob/main/state.md)
- 親のReact.Componentが実行されることを保証するためにsuperを呼ぶ

```
class App extends React.Component {
  constructor(props) {
    super(props);
```

- constructorを使わずにstateの初期化が可能 参考 [seasons](https://github.com/endw0901/react_typescript/tree/main/seasons/src)
