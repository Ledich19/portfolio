import s from './AboutCodeExample.module.scss';
import CodeExampleItem from './CodeExampleItem/CodeExampleItem';
import { useAppSelector } from '../../app/hooks';

const AboutCodeExample = () => {
  const { exampleCode } = useAppSelector((state) => state.projects);

  return (
    <div className={s.container}>
      {exampleCode.map((repo) => (
        <CodeExampleItem key={repo.repository} repoName={repo.repository} code={repo.codeExample} />
      ))}
    </div>
  );
};

export default AboutCodeExample;
