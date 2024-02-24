import { useState } from 'react';
import MarkdownViewer from './MarkdownViewer';

const App = () => {
  const [markdownContent, setMarkdownContent] = useState('# This is Markdown text');

  return (
    <div>
      <h3>Markdown Viewer</h3>
      <MarkdownViewer markdown={markdownContent} setMarkdown={setMarkdownContent} />
    </div>
  );
};


export default App;
