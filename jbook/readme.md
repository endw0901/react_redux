# memo

## 外部ツール・プラグイン

- open source browser-based editors:
  Code Mirror<br>
  Ace Editor<br>
  Monaco Editor<br>

- ResizableBox で幅無限、垂直だけ制限

```
    <ResizableBox
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      height={300}
      width={Infinity}
      resizeHandles={['s']}
    >
```

- MDEditor(MardDown エディタ)

```
import MDEditor from '@uiw/react-md-editor';
// https://uiwjs.github.io/react-md-editor/
// https://www.npmjs.com/package/@uiw/react-md-editor
```

- immer <br>
  https://www.npmjs.com/package/immer <br>
  https://immerjs.github.io/immer/update-patterns <br>

=> immer を使って、state の操作をシンプルにする <br>

```
// immerを使わない場合
const reducer = (
  state: CellsState = initialState,
  action: Action
): CellsState => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload; // destructuringすることで、繰り返しaction.payload.idと書かなくていい

      return {
        // stateの配列(loading,error,order,data)全部受けて、dataだけ上書きするspread syntax
        // 新しいオブジェクトを作成する
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            // contentだけ上書きする(これでupdateする)
            content,
          },
        },
      };
```

- マルチパッケージプロジェクトマネジメントツール：Lerna, Yarn Workspaces, NPM Workspaces, Bolt, Luigi <br>
  ※lerna では npm install を使わず、lerna add で管理 <br>
  ※learna ではなく lerna <br>
  コマンド：https://github.com/lerna/lerna <br>
  ※依存関係作成後は、local-api を更新してから cli を start すると、更新後の local-api で実行できるようになる <br>
  ※npm の re-publish 作業が不要ということになる <br>

・local-api 上の.ts(typescript)は local-api 内で transpile してから cli に渡す(TSC でコンパイルして js ファイルに変換)

```
lerna add module-1 --scope=module-2
// 例) expressをcliプロジェクトにだけinstall
lerna add express --scope=cli

// commander: cli用
lerna add commander --scope=cli
```

※scope は package.json の name からきている <br>

- commander：https://www.npmjs.com/package/commander

```
jbook\packages\cli\dist> node index.js serve
node index.js --help

```

- path

```
import path from 'path';
    console.log(path.join(process.cwd(), path.dirname(filename)));
    console.log(path.basename(filename));
```

## typescript

- interface 　 => CodeEditor、index.tsx 参照

- contains の type エラー回避：text-editor.tsx 参照

```
// 引数にかかわらず、containsはNodeかnullなので、as Nodeでtypeエラー回避
if(ref.current && event.target && ref.current.contains(event.target as Node)) {
```

## React

- useRef で参照のために

- 直接 export せず、一度 const に割り当ててから export すると warning 消える

```

const bundle = async (rawCode: string) => {
}

export default bundle;

```

- React-Resizable：https://react-grid-layout.github.io/react-resizable/examples/1.html <br>
  https://www.npmjs.com/package/react-resizable <br>

- useEffect 内で、前の更新を待ってから動く

```

useEffect(() => {
// 初期化
iframe.current.srcdoc = html;
// srcdoc が更新される前に post されてしまうので、post するまで少し待ち、html が srcdoc に入るのを待つ猶予を作る
setTimeout(() => {
// iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '_');
iframe.current.contentWindow.postMessage(code, '_');
}, 50);
// 新しい code のたびに
}, [code]);

```

- useState, useEffect, useRef => text-editor.tsx 参照

```
// useState => 編集中かどうかを判定するstatus保持のため
// useEffect => 画面クリック（で編集モードから抜ける)のイベントをとらえるためにlistenerを起動時に設定するため
// useRef => どこの場所がクリックされたかのDOMを参照するため
```

- エラーハンドリング (preview.tsx 参照)

```
// errorはhelper関数にまとめる（handlerError)
// try catchエラーは即エラーのとき(setTimeoutの遅延エラーはとらえない)
// イベントのerrorは、setTimeoutで遅延エラー(asynchronous)のとき
// preventdefaultを入れているのは、consoleエラーがeventの時に出ないようにするため（handleErrorでconsole出力してるのでそこだけにする
```

- Fragment (cell-list.tsx 参照)：https://qiita.com/kaba/items/b681ffe3412a9af32f92

```
Fragmentはシンタックスシュガーだ。returnで一つの要素しか渡せないという制約を外してくれる。
要するにjsxのネストを浅くするので、デザイン崩れとかの時に使えるとかっこいい。

問題はreturnに複数のtdタグを渡せないので、tdタグをdivで囲っていることだ
不必要なdivが入ってしまっている!

そこでfragmentの出番だ。子要素をdivで囲う代わりにfragmentで囲ってやる。
```

- useEffect の missing dependency 解消：code-cell.tsx 参照。
- useEffect の無限ループ useMemo (use-actions.ts 参照) <br>
  ※1 度だけ実行され、今後何度 useAction 呼んでも同じ関数をメモリから呼んで、画面の無限ちらつきを回避できる <br>
- bunldle を dependency に入れると無限ループになるので、eslint・・・で回避する (code-cell.tsx)

```
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.content, cell.id, createBundle]);
```

- fs

```
// import fs from 'fs/promises';
import { promises as fs } from 'fs';
```

- hooks/use-actions, (cell-list.tsx 参照)

```
import { useActions } from '../hooks/use-actions';

////////
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);
```

## Redux

- redux
- action-creators
- action-types
- actions
- reducers
- store

- state/store.ts 参照：action のテスト(store の dispatch で)

- Redux Store 上では、派生ステータスの保持は避ける(section223 参照) <br>
  例：todo a, b, c と、todoCount:3<br>

- Section19: Selector は synchronous (Async は避ける)

### Redux-thunk

- redux-thunk function の第二引数 getState 関数(redux-store から現在の state を取得する(cells の order,data を取得)) <br>
  ※local-client/src/state/action-creators/index.ts 参照 <br>

```
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const {
      cells: { data, order },
    } = getState();
```

### middleware

- store.ts, persist-middleware.ts 参照
  ※redux, store => local-api の file system で保存し、F5 refresh しても cell の状態が復元されるようになる

- keystroke のたびに毎回保存されるのを回避する

```
        if (timer) {
          // 次のactionがあったら初期化（最後のactionから一定時間があったら  = key strokeがしばらくとまったら)
          clearTimeout(timer);
        }

        // keystrokeのたびに毎回保存されるのを回避する
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);

```

## Javascript

- random 英数字 id 作成(cellReducer.ts)

```
const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};
```

- キャッシュ処理

```
const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
```

- iframe
  ※sandbox=""なら、domain, port, http/https が同じでも parent と iframe の直接通信は遮断できる <br>

- &&は、左が true なら右を返す：https://qiita.com/Imamotty/items/bc659569239379dded55 <br>
  参照：add-cell.tsx <br>

```
interface AddCellProps {
  nextCellId: string | null;
  // 任意として、設定があるときだけ判定（デフォルト未指定のためfalse
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, nextCellId }) => {
  const { insertCellBefore } = useActions();

  return (
    // forceVisibleがtrue
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
```

### 配列 array 処理

- cellReducer.ts 参照 <br>
- push : 末尾に追加 <br>
  unshift:冒頭に追加 <br>
- splice：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

```
    // splice(2,0)だと、index2から0こ除外し、2の前に挿入
    // beforeでなくafterなので、+1たしてafterになるようにする
    state.order.splice(foundIndex + 1, 0, cell.id);
```

- reduce 　参照：cellsReducer <br>
  マップがわりにつかう：https://ginpen.com/2018/12/23/array-reduce/ <br>
  累積：https://github.com/endw0901/javascript/tree/3ec87eee3c4ebca039b8002e1e097654806e84b5/dom-array-methods <br>
  JavaScript で forEach を使うのは最終手段：https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce <br>

```
※配列に対して何らかの操作を行う際は、
filter, find, map, reduce などのメソッドを利用できないか検討し、
いずれのメソッドでも実現ができない場合の最終手段として forEach を選択しましょう。
```

## css

- calc して style 設定

```

      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >

```

- プログレスバーが短い処理で表示されないようにする keyframes <br>
  code-cell.css 参照 <br>
  0.5s の 50%なので、最初の 0.25s から徐々に表示される<br>
  ※bundle が 0.2s 以内の場合は progress-bar が表示されないようにする<br>

## 正規表現

- 改行コードを空白に置換、"を「\"」に置換する、'を「\'」に置換する

```

        const escaped = data
          .replace(/\n/g, '')
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");

```

```

```

## Chrome dev tool F12

- Network を遅くしてテスト：https://qiita.com/Hexa/items/c3d864bc4ac5be0c9d2b <br>
  No throttling => Slow 3G (参照：237) <br>

## NPM デプロイ

- https://github.com/endw0901/react_typescript/blob/main/tiny-npm-deploy/readme.md
