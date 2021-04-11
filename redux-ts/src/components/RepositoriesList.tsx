import { useState } from 'react';
// import { useSelector } from 'react-redux';
// state/reducersのtypeを理解するためのRootStateを使ったuseSelector hook
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

// formの値をaction-creatorに渡して、それを引数にdispatch渡す

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  // state/reducersのreturnにアクセスできる(error, success, payload)
  // state/reducersのtype理解のため、reducuers/indexで新しいtypeを作る
  //  => useTypedSelector hook => stateがreducerのkey valueを理解するようになる
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

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
      {/* errorがnullでないとき(null or stringなので) */}
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
