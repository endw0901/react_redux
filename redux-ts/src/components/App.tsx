import { Provider } from 'react-redux';
// reducers, action creators, middle-waresを1箇所にまとめてexportしてcomponentで使用する
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
