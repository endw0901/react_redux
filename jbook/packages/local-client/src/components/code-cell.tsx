import './code-cell.css';
import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useCumulativeCode } from '../hooks/use-cumulative-code';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  // ※code, errは Redux Storeで管理するため削除
  // const [code, setCode] = useState('');
  // const [err, setErr] = useState('');
  // const [input, setInput] = useState('');
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  // 初回のPreviewウィンドウ作成のため一度だけrender時に呼ぶ
  // useEffect(() => {
  //   createBundle(cell.id, cell.content);
  // }, []);

  // 一定時間で自動で入力code実行
  useEffect(() => {
    // 初回はpreview作って終わり。750ms待たないので起動が早くなる
    // bunldleをdependencyに入れると無限ループになるので、eslint・・・で回避する
    if (!bundle) {
      // 結合して間に改行をつける
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);

      // buildはbundleに分けてまとめる
      // const output = await bundle(cell.content);
      // setCode(output.code);
      // setErr(output.err);
    }, 750);

    // 入力があったら初期化し、タイムカウントをやりなおす。最後に入力してからxxxmsで実行
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {/* 画面のちらつきを回避するためのwrapper */}
        <div className="progress-wrapper">
          {/* !bundleがfalseなら(bundleがtrueなら)loading */}
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} err={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
