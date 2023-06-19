import s from './ProjectBoard.module.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import { useAppSelector } from '../../app/hooks';

const ProjectBoard = () => {
  const { projects } = useAppSelector((store) => store.projects);

  return (
    <div className={s.board}>
      <div className={s.title}> react; redux; </div>
      <div className={s.wrapper}>
        {projects.map((item, i) => (
          <ProjectItem key={item.title} index={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBoard;
