import { MdAssignment, MdFolder, MdMail, MdPhone } from 'react-icons/md';
import s from './AboutSort.module.scss';

import DropList from '../DropList/DropList';
import DropListInner from '../DropListInner/DropListInner';

const AboutSort = () => {
  return (
    <div className={s.list}>
      <DropList title="personal-info">
        <>
          <DropListInner title="bio" icon={<MdFolder className={s.iconRed} />}>
            <span>
              <MdMail className={s.icon} />{' '}
              <a href="mailto:ledich19@gmail.com">ledich19@gmail.com</a>
            </span>
            <span>
              <MdPhone className={s.icon} /> <a href="tel:+38096766040">+38-096-7660409</a>
            </span>
          </DropListInner>
          <DropListInner title="interests" icon={<MdFolder className={s.iconGreen} />}>
            <span>
              <MdMail className={s.icon} />{' '}
              <a href="mailto:ledich19@gmail.com">ledich19@gmail.com</a>
            </span>
            <span>
              <MdPhone className={s.icon} /> <a href="tel:+38096766040">+38-096-7660409</a>
            </span>
          </DropListInner>

          <DropListInner title="education" icon={<MdFolder className={s.iconBlue} />}>
            <span>
              <MdAssignment className={s.icon} /> <span>university</span>
            </span>
            <span>
              <MdAssignment className={s.icon} /> <span>courses</span>
            </span>
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
