import { useState } from 'react';
import { useActions } from '../hooks/useActions';

// formの値をaction-creatorに渡して、それを引数にdispatch渡す

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // submitボタンクリック時にページがリフレッシュする挙動をなくす
    event.preventDefault();

    // formの値をaction-creatorに渡して、それを引数にdispatch渡す
    // dispatch(actionCreators.searchRepositories(term)); => これをする代わりにhookを使う
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
