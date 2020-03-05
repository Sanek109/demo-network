import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/prisoner_PNG27.png';
import {NavLink} from 'react-router-dom';


const User = ({user, isFollowingProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {unfollow(user.id)}}>Unfollow</button>
                        : <button disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {follow(user.id)}}>Follow</button>}
                        </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {'user.location.country'}
                    </div>
                    <div>
                        {'user.location.city'}
                    </div>
                </span>
            </span>
    </div>)
}

export default User;