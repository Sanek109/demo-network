import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='http://pngimg.com/uploads/prison/prison_PNG37.png' />
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;