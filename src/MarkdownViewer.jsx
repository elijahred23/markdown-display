import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ markdown, setMarkdown }) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState(markdown);

  const handlePaste = (e, text) => {
    setMarkdown(text);
  }

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
    setRenderedMarkdown(event.target.value);
  };

  const handleMarkdownClear = () => {
    setMarkdown('');
    setRenderedMarkdown('');
  };

  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Enter your Markdown text here..."
      />
      <button onClick={event=>window.print()}>Print</button>

      <ReactMarkdown>{renderedMarkdown}</ReactMarkdown>
      <button onClick={handleMarkdownClear}>Clear Markdown</button>
    </div>
  );
};

export default MarkdownViewer;
