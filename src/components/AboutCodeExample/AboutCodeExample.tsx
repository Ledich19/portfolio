import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import s from './AboutCodeExample.module.scss';

const AboutCodeExample = () => {
  const codeString = `
  const AboutCodeExample = () => {
    const codeString = '(num) => num + 1';
    return (
      <div className={s.list}>
        Lorem ipsum dolor sit, amet consectetur .
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  };
  `;
  return (
    <div className={s.container}>
      <SyntaxHighlighter language="javascript" style={atelierSulphurpoolDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutCodeExample;
