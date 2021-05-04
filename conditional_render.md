# 条件分岐のRendering

- 例 [seasons](https://github.com/endw0901/react_typescript/tree/main/seasons/src)
- 単純なif文
```
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
```

- ? : 方式でなく、連想配列で分岐する例 (seasons参照)

```
const { text, iconName } = seasonConfig[season];
```
