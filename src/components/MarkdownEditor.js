import React, { useState, useEffect } from "react";

function MarkdownEditor() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPreview(text);
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
          <div>{preview}</div>
        )}
      </div>
    </div>
  );
}

export default MarkdownEditor;
