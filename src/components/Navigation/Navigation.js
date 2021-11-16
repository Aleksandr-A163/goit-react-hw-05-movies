import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
    <header className={s.header}>
        <nav className={s.Navigation}>
            <NavLink
                exact
                to='/home'
                className={s.link}
                activeClassName={s.activeLink}
            >
                Home
            </NavLink>
            <NavLink
                to='/movies'
                className={s.link}
                activeClassName={s.activeLink}               
            >
                Movies
            </NavLink>
        </nav>
    </header>

    )
};

export default Navigation;