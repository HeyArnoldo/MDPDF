import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import ExportPDF from './ExportPDF'
import 'katex/dist/katex.min.css';
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/github.css'


// Función para transformar delimitadores \(...\)/\[...\] a $...$/$$...$$
function transformDelimiters(text) {
  // Reemplaza \(...\) -> $...$
  let newText = text.replace(/\\\((.*?)\\\)/g, '$$$1$');
  
  // Reemplaza \[...\] -> $$...$$ (usa flag 's' para que . incluya saltos de línea)
  newText = newText.replace(/\\\[(.*?)\\\]/gs, '$$$$ $1 $$$$');
  
  return newText;
}

function Preview({ text }) {
  // Transforma delimitadores al formato que remark-math reconoce
  const processedText = transformDelimiters(text);

  return (
    <div className='space-y-4'>
        <div 
            className="prose max-w-none p-4 bg-white markdown-body"
            id="preview"
        >
        <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
        >
            {processedText}
        </ReactMarkdown>
        </div>
        <ExportPDF/>
    </div>
  );
}

export default Preview;
