# reducers

## reducers, Actions, Action Types

- https://github.com/endw0901/react_typescript/tree/main/redux-ts/src/state
- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/state/reducers/repositoriesReducuer.ts

- 引数と戻りにinterfaceでtypeチェックする
- state, reducer戻りのtypeチェック
- 
- Actionタイプ別のinterface ※state/action-types,  state/actionsに別ファイルにまとめる
- 複数のタイプチェックを1つにまとめる
- 共通の文字列管理はenumのみに集約する

## RootState

- state, reducerの戻りinterface:RepositoriesStateを理解している => RootStateで渡す
- key:value => RootStateでこのdataを持つことををタイプ定義として渡す
- redux storeのtype定義(RootState)を新たに作る => components側で理解できるようにするため
- 
- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/state/reducers/index.ts
- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/state/index.ts


- state/reducersのtype理解のため、reducuers/indexで新しいtypeを作る
- useTypedSelector hook => stateがreducerのkey valueを理解するようになる
- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/hooks/useTypedSelector.ts

## 良いstate変更と、悪いstate変更
- [Section19](https://www.udemy.com/course/react-redux/learn/lecture/12586898#overview)
- constは変更できないが、配列pushなどをやると変更できる。
- reducerはやっていいstate変更と、ダメなstate変更がある
- redux-thunkでは、state変更をとらえて再renderへ
 
```
1.配列から要素を削除
// bad
state.pop()
// good
state.filter(element => element != 'hi')

2.配列に要素を追加
// bad
state.push('hi')
// good
[ ...state, 'hi']

3.配列の要素のreplace
// bad
state[0] = 'hi'
// good
state.map(el => el === 'hi' ? 'bye' : el)

4.オブジェクトのproperty更新
// bad
state.name = 'Sam'
// good
{ ...state, name: 'Sam' }

5.オブジェクトのproperty追加
// bad
state.age = 30
// good
{ ...state, age: 30 }

6. オブジェクトのproperty削除
// bad
delete state.name
// good
{ ...state, age: undefined}
_.omit(state, 'age')

```


## 関連
- [redux-thunk](https://github.com/endw0901/react_typescript/blob/main/redux-thunk.md)
