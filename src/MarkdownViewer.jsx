import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ markdown, setMarkdown }) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState(markdown);
  const [title, setTitle] = useState(document.title);
  const [appendPaste, setAppendPaste] = useState(false);
  const [printAfterPaste, setPrintAfterPaste] = useState(true);

  const handlePaste = (e) => {
    navigator.clipboard.readText().then((text) => {
      if(appendPaste){
        setMarkdown(prevText=>prevText + "\\\n\\\n" + text);
        setRenderedMarkdown(prevText=>prevText + "\\\n\\\n" + text);
      } else {
        setMarkdown(text);
        setRenderedMarkdown(text);
      }
      if(printAfterPaste){
        setTimeout(()=>{
            window.print();
        }, 200);
      }
    });
  };

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
      <button onClick={handlePaste}>Paste</button>
      <span>
      Append Paste <input type="checkbox" checked={appendPaste} onClick={event=>setAppendPaste(!appendPaste)}/>
      </span>
      <span>
      Print After Paste <input type="checkbox" checked={printAfterPaste} onClick={event=>setPrintAfterPaste(!printAfterPaste)}/>
      </span>
      <ReactMarkdown>{renderedMarkdown}</ReactMarkdown>
      <button onClick={handleMarkdownClear}>Clear Markdown</button>
    </div>
  );
};

export default MarkdownViewer;
