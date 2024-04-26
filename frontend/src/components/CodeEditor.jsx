import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useState } from "react";

const CodeEditor = ({ language, theme, code, onChange, readOnly }) => {
  const [editorKey, setEditorKey] = useState(0);
  useEffect(() => {
    setEditorKey((prevKey) => prevKey + 1);
  }, [language, theme]);

  return (
    <Editor
      options={{
        readOnly: readOnly,
      }}
      key={editorKey}
      width="100%"
      height="55vh"
      defaultLanguage={language}
      defaultValue={code}
      theme={theme}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
