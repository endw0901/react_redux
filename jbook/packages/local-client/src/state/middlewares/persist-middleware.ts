import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { saveCells } from '../action-creators';
import { RootState } from '../reducers';

export const persistMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: any;

  return (next: (actoin: Action) => void) => {
    return (action: Action) => {
      next(action);

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(action.type) // 入力actionがこのリストにマッチしていたら次の処理へ
      ) {
        // console.log('I want to save cells');

        if (timer) {
          // 次のactionがあったら初期化（最後のactionから一定時間があったら  = key strokeがしばらくとまったら)
          clearTimeout(timer);
        }

        // keystrokeのたびに毎回保存されるのを回避する
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    };
  };
};
