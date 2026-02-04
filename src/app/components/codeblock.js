'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ text, language = 'javascript', className }) {

  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      wrapLongLines
      customStyle={{ background: 'black', paddingLeft: '60px', paddingRight: '60px', borderRadius: '30px' }}
      className={className}
    >
      {text}
    </SyntaxHighlighter>
  );
}