import './text-editor.css';
import { useState, useEffect, useRef } from 'react';
// https://uiwjs.github.io/react-md-editor/
// https://www.npmjs.com/package/@uiw/react-md-editor
import MDEditor from '@uiw/react-md-editor';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

// useState => 編集中かどうかを判定するstatus保持のため
// useEffect => 画面クリック（で編集モードから抜ける)のイベントをとらえるためにlistenerを起動時に設定するため
// useRef => どこの場所がクリックされたかのDOMを参照するため

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null); // (null)は、デフォルトがnullという意味
  const [editing, setEditing] = useState(false);
  // const [value, setValue] = useState('# Header');
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // ref (markdownEditor)が存在する & クリックイベントが発生している & クリックした場所がmark down editorであるとき
      if (
        ref.current &&
        event.target &&
        // 引数にかかわらず、containsはNodeかnullなので、as Nodeでtypeエラー回避
        ref.current.contains(event.target as Node)
      ) {
        // console.log('element cliked on is inside editor');
        return;
      }
      // console.log('element clicked on is not inside editor');

      setEditing(false);
    };
    document.addEventListener('click', listener, { capture: true });
    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
    // 一度だけcall
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || '')}
        />
      </div>
    );
  }

  // card, card-contentはbulmaのcss class
  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        {/* cell.contentが空の時（デフォルト表示のとき) => click to edit */}
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
