# form

- [サンプル：検索バー](https://github.com/endw0901/react_typescript/tree/main/searchbar/src)
- [YouTube Video検索](https://github.com/endw0901/react_typescript/tree/main/videos/src)

## controlled
formでstateを使う<br>

1. user入力 <br>
2. callbackがinvokeされる <br>
3. setStateで値更新 <br>
4. Component再renderされる <br>
5. state => valueに値を引き渡す   <br>
 <br>
 
```
// jsだと、DOMにアクセスしてvalueを取る
<input value="xxx" />

// react はstateでvalueにアクセス
state -> {term: 'xxx'}
```

## Redux Form
 - [サンプル：stream]() <br>
<br>

1. user入力 <br>
2. callbackがinvokeされる <br>
  ※onChange => handler => Redux Form Action Creator => Redux Form Reducer<br>
<br>
3. setStateで値更新<br>
4. Component再renderされる <br>
5. state => valueに値を引き渡す <br>
  ※Redux Form Reducer => mapStateToProps => props => value<br>
 <br>


## 関連
- [Event handler](https://github.com/endw0901/react_typescript/blob/main/event_handler.md)
- [this](https://github.com/endw0901/react_typescript/edit/main/this.md)
- [arror functionでthisのコンテキスト問題を解決](https://github.com/endw0901/react_typescript/edit/main/this.md)
