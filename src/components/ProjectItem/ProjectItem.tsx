import { FaGithub } from 'react-icons/fa';
import s from './ProjectItem.module.scss';

type Props = {
  item: {
    title: string;
    image: string;
    technologies: string[];
    description: string;
    gitLink: string;
    deploy: string;
  };
  index: number;
};

const ProjectItem = ({ item, index }: Props) => {
  const { title, image, technologies, description, gitLink, deploy } = item;

  return (
    <div className={s.item}>
      <div className={s.title}>
        <span className={s.count}> Project {index + 1}</span>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <span className={s.name}> // {title} </span>
      </div>

      <div className={s.block}>
        <div className={s.photo}>
          <img src={`projects/${image}`} className={s.image} alt="ProjectItem scrin" />
        </div>

        <div className={s.text}>
          <div>
            <div className={s.technologies}>{technologies.join('; ')}</div>
            {description}
          </div>
          <div className={s.buttonBlock}>
            <a className={s.button} rel="noreferrer" target="_blank" href={deploy}>
              view-project
            </a>

            {gitLink && (
              <a className={s.button} rel="noreferrer" target="_blank" href={gitLink}>
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
