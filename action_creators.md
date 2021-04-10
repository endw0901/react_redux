# action creators

- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/state/action-creators/index.ts

## hooks(useActions), dispatch

- formの値をaction-creatorに渡して、それをdispatch渡すことでactionをreduxに投げる。それをhooks/useActionsでつなぐ

1. useActions hooksで、actionCreatorsとdispatchをbind
2. components側でuseActionsからdestructuringで使いたいactionを受けて
3. formの入力値をその受けたアクションに渡すことで使う

- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/hooks/useActions.ts

