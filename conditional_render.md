# 条件分岐のRendering

- 例 [seasons](https://github.com/endw0901/react_typescript/tree/main/seasons/src)
- 
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
