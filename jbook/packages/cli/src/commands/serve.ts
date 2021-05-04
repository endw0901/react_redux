import path from 'path';
import { Command } from 'commander';
import { serve } from '@bookendw/local-api';

// user環境ならtrue
const isProduction = process.env.NODE_ENV === 'production';

// jbook\packages\cli\dist> node index.js serve
// [filename]はオプション、<number>は必須  [任意] <必須>
export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  // 4005はデフォルト値
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    // console.log(filename, options);
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      // isProductionがtrueのとき、!isProductionはfalseで、proxyは使わない
      await serve(
        parseInt(options.port),
        path.basename(filename),
        dir,
        !isProduction
      );
      console.log(`
        Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.
      `);
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        console.error('Port is in use, Try running on a different port.');
      } else {
        console.log('Here the problem', err.message);
      }
      process.exit(1);
    }
  });

// テスト
// \jbook\packages\cli\dist> node index.js serve notes/notebook.js
