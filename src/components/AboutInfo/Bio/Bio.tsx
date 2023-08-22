import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import s from './Bio.module.scss';

const testText = ` 
 * Hello, my name is Alexander Chumachenko. 
 * I am a novice developer with a strong interest in both frontend
 * and backend development. Currently, my expertise 
 * leans more towards frontend, but my enthusiasm for programming 
 * as a whole can be likened to a passion – . 
 * I have about 2 years of non-commercial experience in this field.
 
 * My technical education, specifically a specialist degree 
* in electrical engineering and electrical technologies, 
* provides me with a solid technical foundation that 
* I actively apply to software development.
 
* In addition, my involvement in courses 
* has allowed me to gain leadership experience, 
* as I led a group of students. In this role, 
* I often encountered challenges related to 
* version control using Git and successfully 
* found solutions for all difficulties.
 
* My interests are wide-ranging – from engaging 
* in modeling and exciting games to thrilling travels. 
* Reading plays a significant role in my life, often 
* inspiring fresh ideas and approaches to programming.
 
* In my work, I am characterized by calmness and the 
* ability to handle routine tasks with consistent efficiency.
* Simultaneously, I am driven towards intriguing and 
* complex problems, delving into details and understanding
* how everything functions. My determination to achieve 
* set goals empowers me to attain excellent results.
 
* Overall, I am ready to learn and grow in the field of 
* programming, aiming for new heights and acquiring new skills.
* I believe that my technical background and problem-solving 
* approach will guide me towards success in this captivating realm. `;

const Bio = () => {
  const viewText = `/**${testText}\n*/`;
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

export default Bio;
