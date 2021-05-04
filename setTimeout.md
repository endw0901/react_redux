# setTimeout

- useEffect + APIとあわせてcallタイミングの制御で使う

```
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
```

## 関連

- [useEffect](https://github.com/endw0901/react_typescript/blob/main/useEffect.md)
- [Dropdown・Accordion・Google翻訳API](https://github.com/endw0901/react_typescript/tree/main/dropdown_translate/src) <br>

