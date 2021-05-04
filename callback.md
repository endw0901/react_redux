# 子から親へのcallback

- [サンプル：検索バー](https://github.com/endw0901/react_typescript/tree/main/searchbar/src)

```
// ◆親のApp　※onSubmitに関数を渡す ※()無し
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
  
  // ◆子は、onChangeで入力値をsetStateでstateに設定し => onSubmitでstateの値を引数にpropsで親から渡されたcallback関数をcall(親がcallする)
    onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
 
  
  ```
