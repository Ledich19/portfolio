import AboutCodeExample from '../../components/AboutCodeExample/AboutCodeExample';
import AboutSort from '../../components/AboutSort/AboutSort';
import AboutText from '../../components/AboutText/AboutText';
import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.about}>
      <AboutSort />
      <div className={s.container}>
        <AboutText />
        <AboutCodeExample />
      </div>
    </div>
  );
};
export default About;
