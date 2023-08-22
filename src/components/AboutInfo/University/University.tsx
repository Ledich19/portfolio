import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './University.module.scss';

const testText = `<University
  name="Kharkiv National University of Municipal Economy named after A.N. Beketov"
  faculty="Electrical Engineering and Electrical Technologies."
  specialization="Electric Power Supply for Cities"
  year_of_graduation=2014 >
</University>
`;

const University = () => {
  return (
    <div className={s.container}>
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines
        language="jsx"
        // style={coldarkDark}
        style={{
          ...coldarkDark,
          hljs: { ...coldarkDark.hljs, background: 'none' },
        }}
      >
        {testText}
      </SyntaxHighlighter>
    </div>
  );
};

export default University;
