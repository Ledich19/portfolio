import React from 'react';
import { FaFacebook, FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.contacts}>
        <div className={s.text}>find me in:</div>
        <a className={s.link} href="https://www.linkedin.com/in/oleksander-chumachenko-125b39219/">
          <FaLinkedin className={s.icon} />
        </a>
        <a className={s.link} href="https://www.facebook.com/aleksandr.chumachenko.1">
          <FaFacebook className={s.icon} />
        </a>
        <a className={s.link} href="https://t.me/Aleksandr_Ch19">
          <FaTelegramPlane className={s.icon} />
        </a>
      </div>

      <div className={s.git}>
        <a className={s.link} href="https://github.com/Ledich19">
          <FaGithub className={s.icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
