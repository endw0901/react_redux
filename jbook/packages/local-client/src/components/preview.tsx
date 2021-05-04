import './preview.css';
import { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
  err: string;
}

// errorはhelper関数にまとめる（handlerError)
// try catchエラーは即エラーのとき(setTimeoutの遅延エラーはとらえない)
// イベントのerrorは、setTimeoutで遅延エラー(asynchronous)のとき
// preventdefaultを入れているのは、consoleエラーがeventの時に出ないようにするため（handleErrorでconsole出力してるのでそこだけにする
const html = `
<html>
  <head>
    <style>html { background-color: white; }</style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const handleError = (err) => {
        const root = document.querySelector('#root');
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
        console.error(err);
      };

      window.addEventListener('error', (event) => {
        event.preventDefault();
        handleError(event.error);
      });

      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          handleError(err);
        }
      }, false);
    </script>
  </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // 初期化
    iframe.current.srcdoc = html;
    // srcdocが更新される前にpostされてしまうので、postするまで少し待ち、htmlがsrcdocに入るのを待つ猶予を作る
    setTimeout(() => {
      // iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
    // 新しいcodeのたびに
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};

export default Preview;
