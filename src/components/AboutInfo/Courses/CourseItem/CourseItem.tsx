import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './CourseItem.module.scss';
import { CertificateType } from '../../../../app/types';

type CourseItemProps = {
  certificate: CertificateType;
};

const CourseItem = ({ certificate }: CourseItemProps) => {
  return (
    <div className={s.container}>
      <div className={s.schoolText}>
        <a href={certificate.link} className={s.schoolName}>
          @{certificate.school}
        </a>
      </div>

      <div className={s.photo}>
        <img
          src={`img/certificates-img/${certificate.img}`}
          className={s.image}
          alt="ProjectItem scrin"
        />
      </div>
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines
        language="jsx"
        // style={coldarkDark}
        style={{
          ...coldarkDark,
          // hljs: { ...coldarkDark.hljs, background: 'none' },
        }}
      >
        {certificate.technologies.join(';\n')}
      </SyntaxHighlighter>
    </div>
  );
};

export default CourseItem;
