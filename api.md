# 外部API

## 位置情報
- [Geolocation API](https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API)
- chrome F12の... => Sensors => Geolocation のoverrideが可能(ここはサンフランシスコ、とか
- [現在の位置情報表示サンプル](https://github.com/endw0901/react_typescript/tree/main/seasons/src)

- [Unsplash API](https://github.com/endw0901/react_typescript/tree/main/unsplash_api/src) <br>
※検索バーで指定したテキストをkeyに、APIで取得したimage配列をstateに格納して画面に表示する <br>
※thisコンテキスト問題解決のため、arrow functionを使う <br>
※API callの詳細コードを別ファイルに分けてリファクタリング <br>

## 関連
- [API call : async-await を使わない promise .then 方式 ⇔ async-await 方式](https://github.com/endw0901/javascript/tree/main/lyrics-search)
- [arror functionでthisのコンテキスト問題を解決](https://github.com/endw0901/react_typescript/edit/main/this.md)
