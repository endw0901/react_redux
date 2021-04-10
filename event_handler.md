# event handler

https://github.com/endw0901/react_typescript/blob/main/rts/src/events/EventComponent.tsx

```
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ChangeEvent:テキスト入力、ラジオボタン選択など
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };
```


## event.preventDefault()
- submitボタンクリック時にページがリフレッシュする挙動をなくす
- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/components/RepositoriesList.tsx
