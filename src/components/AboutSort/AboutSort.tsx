import { MdFolder, MdMail, MdPhone } from 'react-icons/md';
import s from './AboutSort.module.scss';

import SortItem from '../DropList/DropList';

const AboutSort = () => {
  return (
    <div className={s.list}>
      <SortItem title="personal-info">
        <>
          <span>
            <MdFolder className={s.iconRed} /> Bio
          </span>
          <span>
            <MdFolder className={s.iconGreen} /> interest
          </span>
          <span>
            <MdFolder className={s.iconBlue} /> education
          </span>
        </>
      </SortItem>
      <SortItem title="contacts">
        <span>
          <MdMail className={s.icon} /> <a href="mailto:ledich19@gmail.com">ledich19@gmail.com</a>
        </span>
        <span>
          <MdPhone className={s.icon} /> <a href="tel:+38096766040">+38-096-7660409</a>
        </span>
      </SortItem>
    </div>
  );
};

export default AboutSort;
