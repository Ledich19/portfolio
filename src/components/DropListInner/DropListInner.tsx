import { useState, ReactNode } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

import s from './DropListInner.module.scss';

type DropListInnerProperty = {
  children?: ReactNode;
  icon: ReactNode;
  title: string;
};

const DropListInner = ({ children, title, icon }: DropListInnerProperty) => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={s.titleBlock}>
        <button onClick={toggleVisible} type="button" className={s.button}>
          <span>
            {!visible ? <FaAngleDown className={s.open} /> : <FaAngleRight className={s.close} />}
          </span>
          <span className={visible ? s.title : s.title_active}>
            {icon} <span className={s.titleText}>{title}</span>
          </span>
        </button>
      </div>
      <div className={visible ? s.elementsList : s.elementsList_active}>{children}</div>
    </>
  );
};

DropListInner.defaultProps = {
  children: undefined,
};

export default DropListInner;
