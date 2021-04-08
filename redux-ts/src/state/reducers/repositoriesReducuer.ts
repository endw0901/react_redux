// 引数と戻りにinterfaceでtypeチェックする
// state, reducer戻りのtypeチェック
// Actionタイプ別のinterface ※state/action-types,  state/actionsに別ファイルにまとめる
// 複数のタイプチェックを1つにまとめる
// 共通の文字列管理はenumのみに集約する

import { ActionType } from '../action-types';
import { Action } from '../actions';

// state, reducer戻りのtypeチェック
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// 引数と戻りにinterfaceでtypeチェックする
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
