# Reactのナビゲーション
- ナビゲーションの主要はReact-Router
- react-router-dom

- react-router-domアプリの中でのaタグは既存のhtmlデータすべて捨ててしまうのでNG
```
<a />
```
## サンプルプロジェクト
- [stream]() <br>
※常に固定のヘッダ + browser routerで切り替わるエリアを同時に表示する <br>


## Linkタグ
- [React Routerのexactとは何か](https://qiita.com/gombeedoe/items/6f4ea0e37775bac01c0d)
- path="/" exactのときはイコールを見る。 path="/pagetwo" のときはcontainでみる。/をcontainで見ると全部ヒットするので

- Linkタグは、ブラウザURL遷移・html fetchを抑制し、表示上のURLをhistoryから取得してroutingする

### ルーティング
- BrouswerRouter・・・localhost:3000/pagetwo
- HashRouter・・・・・localhost:3000/#/pagetwo
- MemoryRouter・・・・localhost:3000/


- [streams](https://github.com/endw0901/react_typescript/tree/main/streams/client/src) <br>
※history<br>

```
import { createBrowserHistory } from 'history';
export default createBrowserHistory();
```
