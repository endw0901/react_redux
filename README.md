# react_typescript

## state(actionCreators,reducer,store) - hook図
https://github.com/endw0901/react_typescript/blob/main/redux-ts/actionCreator.pdf

## [jbook](https://github.com/endw0901/react_typescript/tree/main/jbook)

```
npx create-react-app jbook --template typescript
cd jbook
npm install --save-exact esbuild-wasm@0.8.27
yarn add -D @types/react
npm start
npm view react dist.tarball
npm install axios
npm install localforage
npm install --save-exact @monaco-editor/react@3.7.5
npm install --save-exact monaco-editor
npm install prettier @types/prettier
npm install bulmaswatch
npm install --save-exact monaco-jsx-highlighter@0.0.15 jscodeshift@0.11.0 @types/jscodeshift@0.7.2
npm install --save-exact react-resizable@1.11.0 @types/react-resizable@1.7.2
npm install --save-exact @uiw/react-md-editor@2.1.1
npm install --save-exact @types/react-redux@7.1.15 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0 axios@0.21.1
npm install immer
npm install @fortawesome/fontawesome-free

// import reactでエラーになったらこれ
yarn add -D @types/react

// Lernaインストール・初期設定
npm install -g --save-exact lerna@3.22.1

※jbookをlocak-clientにrenameして別フォルダ作成
mkdir jbook
cd jbook
lerna init
local-clientをフォルダごとjbook/package配下に移動

cd packages
mkdir cli
mkdir local-api

cd cli
npm init -y
cd ..
cd local-api
npm init -y

※lernaではnpm installを使わず、lerna addで管理
※learnaではなくlerna

// local-apiで
lerna add commander --scope=cli
// local-apiにindex.js追加後
lerna add local-api --scope=cli
// cliにindex.jsを追加後、起動
cd ..
cd cli
// 起動 ※cli上で依存するlocal-apiが起動する
node index.js

lerna add typescript --dev --scope=local-api

// tsconfig.jsonファイル作成
cd ..
cd local-api
npx typescript --init
// local-apiにsrcフォルダを作成し、tsconfigファイル設定："outDir": "./dist",、declaration: true
// local-apiのpackage.jsonのscriptに下記を挿入
  "scripts": {
    "start": "tsc --watch --preserveWatchOutput",
    
// local-apiでtypescriptをjavascriptにtranspileしてからcliに渡すため、local-apiのpackage.jsonのmainを下記に変更（＋typesも挿入
"main": "dist/index.js",
"types": "dist/index.d.ts",

// cli, local-apiのindex.jsは削除
cd ..
cd cli
※index.tsを作成
npx typescript --init
lerna add typescript --dev --scope=cli
// cliにもsrcフォルダを作成し、tsconfigファイル設定："outDir": "./dist"(cliはほかにimportされないのでdeclarationは不要
// package.jsonからmainの行を削除。scriptは同じく
  "scripts": {
    "start": "tsc --watch --preserveWatchOutput",
    
テスト：npm run start
テスト：cd dist => node index.jsでlocal-api起動テスト

// rootのpackage.jsonに下記を追加して、cliもlocal-apiもまとめて起動できるコマンドを作成
  "scripts": {
    "start": "lerna run start --parallel"
  }
  
テスト：jbook直下でnpm run start
  ※commanderでcliの開発はこの起動状態でやること（jsにtranspileされる必要があるので

// jbook直下
lerna add @types/node --dev --scope=cli
// packages直下
lerna add express --scope=local-api
lerna add @types/express --dev --scope=local-api
lerna add cors --scope=local-api
lerna add @types/cors --dev --scope=local-api
lerna add http-proxy-middleware --scope=local-api

lerna add local-client --scope=local-api
```

### Could not find a declaration file for module ‘react’.の対処について

- https://qiita.com/waniwaninowani/items/7ea8b4eacab296758c19

## documents
- React-Redux with Typescript： https://react-redux.js.org/using-react-redux/usage-with-typescript

## NPMデプロイ

- [tiny-npm-deployプロジェクトreadme参照](https://github.com/endw0901/react_typescript/tree/main/tiny-npm-deploy)

## [rts](https://github.com/endw0901/react_typescript/tree/main/rts)

```
npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
yarn add -D @types/react
```

- generates a new React project with Typescript support built in

```
npx create-react-app <appname> --template typescript
cd rts
npm start
```

template
https://github.com/endw0901/react_typescript/blob/main/template.md

### [bundler](https://github.com/endw0901/react_typescript/tree/main/bundler)

```
mkdir bundler
cd bundler
npm init -y
npm install --save-exact webpack@5.11.1 webpack-cli@4.3.0
```
