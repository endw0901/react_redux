# useRef

- document.querySelector('img').clientHeightのようなjavascriptの代わりにReactではuseRefでDOMにアクセスする

```
// DOMにアクセスし、指定のものであるとき、という使い方(dropdown参照
if (ref.current.contains(event.target)) {
```

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

## capture remove

```
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
    useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  ```

## dropdown
- dropdown.js

```
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
```

## 関連
- [callbacks on Image load](https://github.com/endw0901/react_typescript/tree/main/unsplash_api/src) <br>
※useRefで画像の高さを取得する方法

```
// ImageCard.js

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }


```
