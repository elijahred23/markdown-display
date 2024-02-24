import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ markdown, setMarkdown }) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState(markdown);
  const [title, setTitle] = useState(document.title);

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

  useEffect(()=>{
    document.title=title;
  }, [title]);

  return (
    <div>
        <p>Title: <input type="text" value={title} onChange={event=>setTitle(event.target.value)} /></p>
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
