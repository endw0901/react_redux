# react_typescript

- generates a new React project with Typescript support built in

```
npx create-react-app <appname> --template typescript
cd rts
npm start
```

template
https://github.com/endw0901/react_typescript/blob/main/template.md

## install

```
npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
yarn add -D @types/react
```


### bundler

```
mkdir bundler
cd bundler
npm init -y
npm install --save-exact webpack@5.11.1 webpack-cli@4.3.0
```

### Could not find a declaration file for module ‘react’.の対処について

- https://qiita.com/waniwaninowani/items/7ea8b4eacab296758c19

## documents
- React-Redux with Typescript： https://react-redux.js.org/using-react-redux/usage-with-typescript
