# form

- [サンプル：検索バー](https://github.com/endw0901/react_typescript/tree/main/searchbar/src)

## controlled
formでstateを使う<br>

1. user入力
2. callbackがinvokeされる
3. setStateで値更新
4. Component再renderされる
5. state => valueに値を引き渡す  

```
// jsだと、DOMにアクセスしてvalueを取る
<input value="xxx" />

// react はstateでvalueにアクセス
state -> {term: 'xxx'}

```

## 関連
- [Event handler](https://github.com/endw0901/react_typescript/blob/main/event_handler.md)
- [this](https://github.com/endw0901/react_typescript/edit/main/this.md)
- [arror functionでthisのコンテキスト問題を解決](https://github.com/endw0901/react_typescript/edit/main/this.md)