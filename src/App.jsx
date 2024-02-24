import { useState } from 'react';
import MarkdownViewer from './MarkdownViewer';

const App = () => {
  const [markdownContent, setMarkdownContent] = useState('# This is Markdown text');

  return (
    <div>
      <MarkdownViewer markdown={markdownContent} setMarkdown={setMarkdownContent} />
      {/* Other components */}
    </div>
  );
};


export default App;
