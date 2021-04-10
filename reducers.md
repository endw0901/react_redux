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
