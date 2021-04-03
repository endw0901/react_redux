# state

https://github.com/endw0901/react_typescript/blob/main/rts/src/state/GuestList.tsx

- そのままだとnever[]とtypescriptが解釈するので、string配列と明記する
-  => 引数に、...guests配列、最後にname(string)、を受けれるようになる
  
```
const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guist List</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add Guest</button>
    </div>
  );
};

export default GuestList;
```
