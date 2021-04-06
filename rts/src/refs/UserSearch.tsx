// useRef,useEffect追加
import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Saraha', age: 20 },
  { name: 'Alex', age: 40 },
  { name: 'Michael', age: 30 },
];

const UserSearch: React.FC = () => {
  // 他のelementはHTMLInputElementをctrl + click
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    // typecheck上、nullの可能性があるのでチェック必要
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    setName('');

    // オブジェクト配列の検索
    // useStateに単体オブジェクトを格納 typescript定義(undefined)
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {/*ifexist: undefinedを回避するための記法 */}
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
