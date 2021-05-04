import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { createCellsRouter } from './routes/cells';

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  // console.log('serving traffic on port', port);
  // console.log('saving/fetching cells from', filename);
  // console.log('that file is in dir', dir);

  const app = express();

  // 最初にマッチを試す
  // これが最初にこないと、http://localhost:4005/cellsでエラーとなる
  app.use(createCellsRouter(filename, dir));

  // 上記でマッチしなかったとき
  if (useProxy) {
    // 開発用のとき
    app.use(
      createProxyMiddleware({
        target: 'http://localhost:3000',
        ws: true,
        logLevel: 'silent',
      })
    );
  } else {
    // 実際のユーザー環境のとき
    const packagePath = require.resolve(
      '@bookendw/local-client/build/index.html'
    );
    app.use(express.static(path.dirname(packagePath)));
  }

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });
  // app.listen(port, () => {
  //   console.log('Listening on port', port);
  // });
};

// ＜テスト＞
// jbook\packages\cli\dist> node index.js serve
// Listening on port 4005
