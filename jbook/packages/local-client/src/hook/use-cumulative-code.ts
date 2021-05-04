import { useTypedSelector } from './use-typed-selector';

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    // 自分より前のcodeをすべて取得し、まとめてbundleする
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    // bundler.index.tsで、jsxFactoryで設定。_Reactとしているので、
    // userがimport reactを二重でしてもエラーにならず、かつ二重にimportすることはない(裏で共通のreactを使う)
    const showFunc = `
      import _React from 'react';
      import _ReactDOM from 'react-dom';
      var show = (value) => {
        const root = document.querySelector('#root');
        if (typeof value === 'object') {
          if (value.$$typeof && value.props) {
            _ReactDOM.render(value, root)
          } else {
            root.innerHTML = JSON.stringify(value);
          }
        } else {
          root.innerHTML = value;     
        }
      };
    `;
    const showFuncNoop = 'var show = () => {}'; // 自分のcell以前のコード実行時にshowしないようにするための分岐
    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCode.push(showFunc);
        } else {
          cumulativeCode.push(showFuncNoop); // 自分のcell以前のコード実行時にshowしないようにするための分岐
        }
        cumulativeCode.push(c.content);
      }
      // 上のcellすべて取得し、自分のcellになったらpush処理して抜ける
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join('\n');
  // console.log(cumulativeCode);
  // console.log(bundle);
};
