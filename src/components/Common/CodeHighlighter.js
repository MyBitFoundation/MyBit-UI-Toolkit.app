import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';

registerLanguage('jsx', jsx);

const customStyle = {
    background: "#fff",
    margin: "0px 10px",
    padding: "0px 10px 15px 10px"
}

const CodeHighlighter = ({ code }) => (
    <div>
        <SyntaxHighlighter language='jsx' customStyle={customStyle} style={prism}>{code}</SyntaxHighlighter>
    </div>
)

export default CodeHighlighter;