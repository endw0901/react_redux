// https://immerjs.github.io/immer/update-patterns
import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell } from '../cell';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  // 連想配列のtypescript宣言：https://qiita.com/Rock22/items/d7ae96464bdbf297c6ec
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

// immerを使って、stateの操作をシンプルにする
// ...stateでスプレッド構文を使って新たなオブジェクトを作成してreturnしなくていい。immerで直接更新できる (return typeも不要)
// immerのproduceで全体を囲う

const reducer = produce(
  (state: CellsState = initialState, action: Action): CellsState => {
    switch (action.type) {
      case ActionType.SAVE_CELLS_ERROR:
        state.error = action.payload;
        return state;
      case ActionType.FETCH_CELLS:
        state.loading = true;
        state.error = null;
        return state;
      case ActionType.FETCH_CELLS_COMPLETE:
        state.order = action.payload.map((cell) => cell.id);
        state.data = action.payload.reduce((acc, cell) => {
          acc[cell.id] = cell;
          return acc;
        }, {} as CellsState['data']);
        return state;
      case ActionType.FETCH_CELLS_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionType.UPDATE_CELL:
        const { id, content } = action.payload; // destructuringすることで、繰り返しaction.payload.idと書かなくていい
        state.data[id].content = content;
        return state;
      case ActionType.DELETE_CELL:
        delete state.data[action.payload];
        // 削除するidを除く
        state.order = state.order.filter((id) => id !== action.payload);
        return state;
      case ActionType.MOVE_CELL:
        // upならindexを-1前に、downなら + 1後ろにしてswap
        const { direction } = action.payload;
        const index = state.order.findIndex((id) => id === action.payload.id);
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex > state.order.length - 1) {
          return state;
        }
        // 移動先(targetindex)のorderを、移動元(index)に設定
        state.order[index] = state.order[targetIndex];
        // 入力idを、移動先(target)に設定
        state.order[targetIndex] = action.payload.id;

        return state;
      case ActionType.INSERT_CELL_AFTER:
        const cell: Cell = {
          content: '',
          type: action.payload.type,
          id: randomId(),
        };

        state.data[cell.id] = cell;
        // insert先のindex(この前にinsert)
        const foundIndex = state.order.findIndex(
          (id) => id === action.payload.id
        );

        if (foundIndex < 0) {
          // 指定がないときは末尾に追加
          // state.order.push(cell.id);
          // 指定がないときは最初に追加
          state.order.unshift(cell.id);
        } else {
          // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
          // splice(2,0)だと、index2から0こ除外し、2の前に挿入
          // beforeでなくafterなので、+1たしてafterになるようにする
          state.order.splice(foundIndex + 1, 0, cell.id);
        }

        return state;
      default:
        return state;
    }
  },
  initialState
);

const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;
