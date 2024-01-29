import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={`${s.list} ${open || s.menuOpen}`}>
          <li className={s.name}>
            <NavLink to="/about/bio" className={s.navLink}>
              oleksandr-chumachenko
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              _hello
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/about/bio"
              className={(info) => (info.isActive ? s.activeLink : s.navLink)}
            >
              _about-me
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/projects"
              className={(info) => (info.isActive ? s.activeLink : s.navLink)}
            >
              _projects
            </NavLink>
          </li>
        </ul>
        <div className={s.contact}>{/* _contact-me */}</div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`${s.burger} ${open || s.active}`}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`${open || s.burgerBlure}`} />
    </header>
  );
};

export default Header;
