# state

- state = JSオブジェクトで、クラスcomponentのデータを保持する
- stateを更新すると再度renderされる
- component生成時に初期化されないといけない
- setStateで更新するルール

- [constructor](https://github.com/endw0901/react_typescript/blob/main/constructor.md)

## useStateに配列を格納
https://github.com/endw0901/react_typescript/blob/main/rts/src/state/GuestList.tsx

- そのままだとnever[]とtypescriptが解釈するので、string配列と明記する
-  => 引数に、...guests配列、最後にname(string)、を受けれるようになる

## useStateに単体オブジェクトを格納 typescript定義(undefined)

https://github.com/endw0901/react_typescript/blob/main/rts/src/state/UserSearch.tsx
