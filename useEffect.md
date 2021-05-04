# useEffect

- useRefとあわせて、起動時の最初のフォーカス先を指定
- 指定できるのは（第二引数とタイミング)
1. []　　：最初のみ
2. 未指定：最初 + renderのたび
3. [data]：最初 + renderのたび + dataが変化したとき

## typescript
https://github.com/endw0901/react_typescript/blob/main/rts/src/refs/UserSearch.tsx

```
  useEffect(() => {
    // typecheck上、nullの可能性があるのでチェック必要
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);
```

## useEffectの中でAPI
- dropdown参照 <br>
※const doTranslation....

## 関連

- [クラスのlifecycle](https://github.com/endw0901/react_typescript/blob/main/lifecycle.md)


- [Accordion](https://github.com/endw0901/react_typescript/tree/main/dropdown_translate/src) <br>
※useEffectとasync await API <br>
※参照：Search.js <br>


- [setTimeout](https://github.com/endw0901/react_typescript/blob/main/setTimeout.md)
