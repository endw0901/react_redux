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
