# ul li 箇条書き

https://github.com/endw0901/react_typescript/blob/main/rts/src/state/GuestList.tsx

- keyが必要
- mapを使う

```
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  // そのままだとnever[]とtypescriptが解釈するので、string配列と明記する
  // => 引数に、...guests配列、最後にname(string)、を受けれるようになる
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;

```
