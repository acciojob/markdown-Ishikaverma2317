import React, { useState } from "react";

function parseMarkdown(text) {
  // h1 support
  if (text.startsWith("# ")) {
    return <h1>{text.replace("# ", "")}</h1>;
  }

  // fallback plain text
  return <p>{text}</p>;
}

function MarkdownEditor() {
  const [text, setText] = useState("");

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Markdown here..."
      />

      <div className="preview">
        {parseMarkdown(text)}
      </div>
    </div>
  );
}

export default MarkdownEditor;
