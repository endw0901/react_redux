import './code-editor.css';
import './syntax.css';
import { useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import codeShift from 'jscodeshift';
// type定義エラーはtypes.d.tsで回避(実験的拡張機能なので)
import Highlighter from 'monaco-jsx-highlighter';

// index.tsxで引数指定必須とするためのinterface
interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();

  // 最初にdisplay時に実行される
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 }); // タブサイズ

    // jsx内のsyntax ハイライト
    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );
    highlighter.highLightOnDidChangeModelContent(
      // コード書いている途中で毎回エラー出ないよう抑制
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, ''); // フォーマット後の　　改行コード除去
    editorRef.current.setValue(formatted);
  };

  // @monaco-editor/reactをctrl+クリックした先で、themeなどのカスタマイズオプションを知れる
  return (
    <div className="editor-wrapper">
      {/* bulmaswatchのclassName */}
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        Format
      </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        // 初期表示
        value={initialValue}
        theme="dark"
        // syntax ハイライト、コードチェック、候補表示など
        language="javascript"
        height="100%"
        options={{
          // 右端で折り返し
          wordWrap: 'on',
          minimap: { enabled: false },
          // 使わないコードを薄くするのをやめる(false)
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
