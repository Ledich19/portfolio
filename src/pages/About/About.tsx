import { Outlet } from 'react-router-dom';
import AboutCodeExample from '../../components/AboutCodeExample/AboutCodeExample';
import AboutSort from '../../components/AboutSort/AboutSort';
import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.about}>
      <AboutSort />
      <div className={s.container}>
        <Outlet />
        <AboutCodeExample />
      </div>
    </div>
  );
};
export default About;
