import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [text]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Markdown here..."
      />

      <div className="preview">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <ReactMarkdown>{text}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default MarkdownEditor;
