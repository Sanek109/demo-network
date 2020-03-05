import React from 'react';
import classes from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <div>
                    <img src='http://pngimg.com/uploads/prisoner/prisoner_PNG27.png' />
                    {props.post}
                </div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default MyPost;