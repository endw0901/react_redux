import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // code-cell.tsxでの useEffectの無限ループ回避できる
  // 一度しか実行しなくなる.
  // 南海code-cellでuseActionを呼ぼうと、createBundleは同じ関数をメモリから使うようになる
  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
