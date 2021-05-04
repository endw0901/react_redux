# useRef

- document.querySelector('img').clientHeightのようなjavascriptの代わりにReactではuseRefでDOMにアクセスする

## typescript
https://github.com/endw0901/react_typescript/blob/main/rts/src/refs/UserSearch.tsx


- nullの可能性があることをtypescriptに伝える必要がある


- useEffectとあわせて、起動時の最初のフォーカス先を指定できる

```
  // 他のelementはHTMLInputElementをctrl + click
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  
  
    return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
```

## 関連
