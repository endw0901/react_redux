# classとfunctionのstate・propsの違い

- classはfunctionに加えて、ライフサイクル(useEffect?)や、stateシステムの利用が可能

## class

https://github.com/endw0901/react_typescript/blob/main/rts/src/classes/UserSearch.tsx

- classはthis.state, this.propsが必要
- stateとpropsのタイプ定義方法

- destructuringすることで、render内でthis.state.userでなくuserで参照可
- this.setState

```
    const { name, user } = this.state;


// this.setState
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        
```

- this.onClick

## function

https://github.com/endw0901/react_typescript/blob/main/rts/src/state/UserSearch.tsx
