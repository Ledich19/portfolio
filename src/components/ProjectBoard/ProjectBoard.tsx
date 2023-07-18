import s from './ProjectBoard.module.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import { useAppSelector } from '../../app/hooks';

const ProjectBoard = () => {
  const { projects } = useAppSelector((store) => store.projects);
  const { technologies } = useAppSelector((store) => store);
  const checkedKeys = Object.keys(technologies).filter((key) => technologies[key]);

  const sortedProjects =
    checkedKeys.length === 0
      ? projects
      : projects.filter((project) =>
          project.technologies.some((value) => checkedKeys.includes(value))
        );

  return (
    <div className={s.board}>
      <div className={s.title}> react; redux; </div>
      <div className={s.wrapper}>
        {sortedProjects.map((item, i) => (
          <ProjectItem key={item.title} index={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBoard;
