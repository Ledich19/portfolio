import { useState, ReactNode } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import s from './DropListInner.module.scss';

type DropListInnerProperty = {
  children: ReactNode;
  title: string;
};

const DropListInner = ({ children, title }: DropListInnerProperty) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={toggleVisible}
        onClick={toggleVisible}
        className={s.titleBlock}
      >
        <button type="button" className={s.button}>
          <span>
            {!visible ? <FaSortDown className={s.open} /> : <FaSortUp className={s.close} />}
          </span>
        </button>
        <span className={visible ? s.title : s.title_active}>{title}</span>
      </div>
      <div className={visible ? s.elementsList : s.elementsList_active}>{children}</div>
    </>
  );
};

export default DropListInner;
