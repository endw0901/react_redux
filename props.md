# props typescript

https://github.com/endw0901/react_typescript/blob/main/rts/src/props/Child.tsx

```

// Reactのproperty(ChildAsFC.displayNameなど)をそのまま使える記法
// interfaceに記載している以外のpropertyも使える(reactでは自動で追加される)
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
```
