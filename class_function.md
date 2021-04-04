# classとfunctionのstate・propsの違い


## class

https://github.com/endw0901/react_typescript/blob/main/rts/src/classes/UserSearch.tsx

- classはthis.state, this.propsが必要
- stateとpropsのタイプ定義方法

-destructuringすることで、render内でthis.state.userでなくuserで参照可

```
    const { name, user } = this.state;
   ```
   
## function

https://github.com/endw0901/react_typescript/blob/main/rts/src/state/UserSearch.tsx
