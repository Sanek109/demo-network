import React from 'react'
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/';
    return (
        <div className={classes.dialog}>
            <NavLink activeClassName={classes.activeLink} to={path + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;