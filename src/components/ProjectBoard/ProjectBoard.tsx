import s from './ProjectBoard.module.scss';
import ProjectItem from '../ProjectItem/ProjectItem';

const projects = [
  {
    title: 'my first project',
    image: 'food.jpg',
    tehnologies: ['html', 'css', 'js'],
    descriptionTitle: 'my first project',
    description:
      'Here I used java script html and css. Make tabs, slider, calculator, timer and modal window with timeout and the ability to close ESK. Only javascript was used',
    gitLink: 'https://github.com/Ledich19/Project_01',
    deploy: 'ledich19.github.io/projects/Project_01',
  },
  {
    title: 'JOHN',
    image: 'john.jpg',
    tehnologies: ['html', 'css'],
    description: 'just a layout for practice',
    gitLink: 'https://github.com/Ledich19/01__JOHN__html_css',
    deploy: 'ledich19.github.io/projects/Project__JOHN',
  },
  {
    title: 'Async race',
    image: 'asunk-race.png',
    tehnologies: ['js', 'typescript', 'REST API', 'scss'],
    description:
      ' The server for them can be found in the repository https://github.com/mikhama/async-race-api#create-winner',
    gitLink: 'https://github.com/Ledich19/rs_asynk-race',
    deploy: 'https://velvety-salamander-ae4f2e.netlify.app',
  },
  {
    title: 'Online Store',
    image: 'online-shop.png',
    tehnologies: ['React', 'Redux', 'typescript', 'scss'],
    description: 'working Online Store. sorting, cart, data validation work.',
    gitLink: 'https://github.com/Ledich19/rs_asynk-race',
    deploy: 'https://velvety-salamander-ae4f2e.netlify.app',
  },
];

const ProjectBoard = () => {
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
