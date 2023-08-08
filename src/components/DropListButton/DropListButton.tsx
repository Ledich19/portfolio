import { ReactNode } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';

import s from './DropListButton.module.scss';

type DropListButtonProperty = {
  icon: ReactNode;
  title: string;
  isArrow?: boolean;
};

const DropListButton = ({ title, icon, isArrow }: DropListButtonProperty) => {
  const location = useLocation();

  return (
    <Link to={`${title}`} type="button" className={s.button}>
      <span>
        {isArrow &&
          (location.pathname.endsWith(`/${title}`) ? (
            <FaAngleRight className={s.open} />
          ) : (
            <FaAngleRight className={s.close} />
          ))}
      </span>
      <span className={location.pathname.endsWith(`/${title}`) ? s.title_active : s.title}>
        {icon} <span className={s.titleText}>{title}</span>
      </span>
    </Link>
  );
};

DropListButton.defaultProps = {
  isArrow: undefined,
};

export default DropListButton;
