# props typescript

## typescript
https://github.com/endw0901/react_typescript/blob/main/rts/src/props/Child.tsx

```
interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return;
  <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>;
};

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

## 再利用 Reuse
- [Reuseの例] (https://github.com/endw0901/react_typescript/tree/main/reuse) <br>
カードのなかのコメント詳細 <br>
コンポーネントの再利用 <br>

## ルール
- 親から子へ。逆はない
