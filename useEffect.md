# useEffect

useRefとあわせて、起動時の最初のフォーカス先を指定

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

## 関連

- [クラスのlifecycle](https://github.com/endw0901/react_typescript/blob/main/lifecycle.md)
