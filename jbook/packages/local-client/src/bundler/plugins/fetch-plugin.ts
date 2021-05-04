import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localForage from 'localforage';

// import 'tiny-test-pkg';
// import 'bulma/css/bulma.css'

const fileCache = localForage.createInstance({
  name: 'filecache',
});

export const fetchPlugin = (inputCode: string) => {
  return {
    name: 'fetch-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        return {
          loader: 'jsx',
          contents: inputCode,
        };
      });

      // キャッシュ処理をall pathで冒頭でまとめる
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        // キャッシュにある場合はすぐreturn
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        if (cachedResult) {
          return cachedResult;
        }
      });

      build.onLoad({ filter: /.css$/ }, async (args: any) => {
        // キャッシュにない場合は取り直し、キャッシュに保存してreturn
        const { data, request } = await axios.get(args.path);

        // const fileType = args.path.match(/.css$/) ? 'css' : 'jsx';
        // 改行コードを空白に置換、"を「\"」に置換する、'を「\'」に置換する
        const escaped = data
          .replace(/\n/g, '')
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");
        const contents = `
            const style = document.createElement('style');
            style.innerText = '${escaped}';
            document.head.appendChild(style);
          `;

        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents,
          resolveDir: new URL('./', request.responseURL).pathname,
        };

        await fileCache.setItem(args.path, result);
        return result;
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        // キャッシュにない場合は取り直し、キャッシュに保存してreturn
        const { data, request } = await axios.get(args.path);

        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname,
        };

        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
