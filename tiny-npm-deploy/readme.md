# NPM デプロイ

## 手順

<1.インストール>

```
cd tiny-npm-deploy
npm init -y
npm install typescript express
npm install @types/express
npx tsc --init

// tsconfig.json編集
    "declaration": true,
    "outDir": "./dist",


// package.json編集
  "scripts": {
    "build": "tsc"
  },

// distフォルダ生成を確認するテスト
npm run build

```

＜ 2.確認＞

1. package.json の"name": "tiny-npm-deployxxxxxxx",
   が npmjs.com で検索してユニークであること

```
[jsbookで追記]
    ※npmでorganizationを作成
    トップのみ@xxxx(organization名)とし、dependenciesのプロジェクトは
    @xxxx/local-apiのようにする
    ※dependencies上のnameも上記にあわせて変更
    ※import文のfrom、require.resolveも使っているところは変更
    
    // packages直下で下記 => import文のエラーが解消される（リンクができるので）
    lerna bootstrap
```

2. デプロイするファイルを決める => package.json の files に指定(dist すべて)

```
  "files": [
    "dist"
  ],
```

3. dependencies と devDependencies を分ける<br>
   ※package.json

既に build 時に実行されている@types/express と typescript を dev に移す

```
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.11",
    "typescript": "^4.2.4"
  }
```

4. package を public アクセス開放 => package.json 編集

```
  "publishConfig": {
    "access": "public"
  },
```

5. CLI ビルド時に実行される file を決める <br>

```
// package.jsonに追記
  "bin": "dist/index.js",

// index.ts の冒頭に追記　※直接実行可能とする指定
#!/usr/bin/env node
```

6. prePublish スクリプト追加 <br>
   => package.json の scripts に prepublishOnly 追加 <br>
   ※publish 前に npm で自動実行される <br>

```
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
```

7. commit to git

```
git init

// .gitignoreファイル作成
dist
node_modules

git status
git add .
git commit -m "initial commit"

```

8. npm publish を実行 <br>
   ※npm run publish ではない <br>

```
npm login
npm publish
```

※spam 検知エラー対応：package.json の name に年月日を入れていると起こりやすいので外す <br>
https://stackoverflow.com/questions/48668389/npm-publish-failed-with-package-name-triggered-spam-detection <br>

9. (publish 後)NPM ライブラリからダウンロードしてローカルで起動
   ライブラリ：<br>
   https://www.npmjs.com/package/small-deploy-endw09 <br>

```
npx tiny-npm-deploy
npm install -g tiny-npm-deploy

// 次回から、npx不要で直接実行できる
tiny-npm-deploy
```
