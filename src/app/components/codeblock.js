'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ text, language = 'javascript', className }) {

  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      wrapLongLines
      customStyle={{ background: 'transparent', padding: '1.25rem 1.25rem 1.25rem 1.5rem', borderRadius: '0.9rem', fontSize: '0.85rem', margin: 0 }}
      className={className}
    >
      {text}
    </SyntaxHighlighter>
  );
}