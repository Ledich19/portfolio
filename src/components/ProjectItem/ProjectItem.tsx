import { FaGithub } from 'react-icons/fa';
import s from './ProjectItem.module.scss';

type Props = {
  item: {
    title: string;
    image: string;
    tehnologies: string[];
    description: string;
    gitLink: string;
    deploy: string;
  };
  index: number;
};

const ProjectItem = ({ item, index }: Props) => {
  const { title, image, tehnologies, description, gitLink, deploy } = item;

  return (
    <div className={s.item}>
      
      <div className={s.title}>
        <span className={s.count}> Project {index + 1}</span>
        <span className={s.name}> // {title} </span>
      </div>

      <div className={s.block}>
        <div className={s.photo}>
          <img src={`projects/${image}`} className={s.image} alt="ProjectItem scrin" />
        </div>

        <div className={s.text}>
          <p>{description}</p>
          <div className={s.tehnologies}>
          {tehnologies.join('; ')}
          </div>
          <div className={s.buttonBlock}>
            <a className={s.button} rel="noreferrer" target="_blank" href={deploy}>
              view-project
            </a>
            <a className={s.button} rel="noreferrer" target="_blank" href={gitLink}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
