import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.name}>oleksandr-chumachenko</li>
          <li className={s.item}>
            <NavLink to="/" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              _hello
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/cart" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              _about-me
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/cart" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              _projects
            </NavLink>
          </li>
        </ul>

        <div className={s.contact}>_contact-me</div>
      </nav>
    </header>
  );
};

export default Header;
