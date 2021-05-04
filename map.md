# map関数

- https://github.com/endw0901/react_typescript/blob/main/redux-ts/src/components/RepositoriesList.tsx

```
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {/* errorがnullでないとき(null or stringなので) */}
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
```

## サンプル

- [Unsplash API](https://github.com/endw0901/react_typescript/tree/main/unsplash_api/src) <br>
※外部APIで取得した画像のリストをmap関数で画面に表示 <br>
※リストにはkeyが必要 <br>
