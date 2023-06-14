import ProjectBoard from '../../components/ProjectBoard/ProjectBoard';
import ProjectsSort from '../../components/ProjectsSort/ProjectsSort';
import s from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={s.projects}>
      <ProjectsSort />
      <ProjectBoard />
    </div>
  );
};
export default Projects;
