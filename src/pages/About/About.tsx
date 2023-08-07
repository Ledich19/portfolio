import AboutSort from '../../components/AboutSort/AboutSort';
import ProjectBoard from '../../components/ProjectBoard/ProjectBoard';
import ProjectsSort from '../../components/ProjectsSort/ProjectsSort';
import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.projects}>
      <AboutSort />
      <ProjectBoard />
    </div>
  );
};
export default About;
