import { MdAssignment, MdFolder, MdMail, MdPhone } from 'react-icons/md';
import s from './AboutSort.module.scss';

import DropList from '../DropList/DropList';
import DropListInner from '../DropListInner/DropListInner';
import DropListButton from '../DropListButton/DropListButton';

const AboutSort = () => {
  return (
    <div className={s.list}>
      <DropList title="personal-info">
        <>
          <DropListButton isArrow title="bio" icon={<MdFolder className={s.iconRed} />} />
          {/* <DropListInner title="interests" icon={<MdFolder className={s.iconGreen} />}>
            <DropListButton title="university" icon={<MdAssignment className={s.icon} />} />
            <DropListButton title="courses" icon={<MdAssignment className={s.icon} />} />
          </DropListInner> */}
          <DropListInner title="education" icon={<MdFolder className={s.iconBlue} />}>
            <DropListButton title="university" icon={<MdAssignment className={s.icon} />} />
            <DropListButton title="courses" icon={<MdAssignment className={s.icon} />} />
          </DropListInner>
        </>
      </DropList>
      <DropList title="contacts">
        <span>
          <MdMail className={s.icon} /> <a href="mailto:ledich19@gmail.com">ledich19@gmail.com</a>
        </span>
        <span>
          <MdPhone className={s.icon} /> <a href="tel:+38096766040">+38-096-7660409</a>
        </span>
      </DropList>
    </div>
  );
};

export default AboutSort;
