import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import s from './AboutText.module.scss';

const testText = `* Lorem ipsum dolor sit amet consectetur,
* adipisicing elit. Perspiciatis non praesentium 
* perferendis mollitia qui, veniam quae? Ex
* iure cum ullam asperiores assumenda expedita
* illo quas, unde, culpa, blanditiis magnam nesciunt.
* Lorem ipsum dolor sit amet consectetur, 
* adipisicing elit. Perspiciatis non praesentium
* perferendis mollitia qui, veniam quae? 
* Ex iure cum ullam asperiores assumenda 
* expedita illo quas, unde, culpa, 
* blanditiis magnam nesciunt. `;

const AboutText = () => {
  const viewText = `/**\n${testText}\n*/`;
  return (
    <div className={s.container}>
      <SyntaxHighlighter
        showLineNumbers
        language="javascript"
        style={{
          ...atelierSulphurpoolDark,
          hljs: { ...atelierSulphurpoolDark.hljs, background: 'none' },
        }}
      >
        {viewText}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutText;
