import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatarPhoto from '../../../assets/images/avatarPhoto.png';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div className={classes.img}>*/}
            {/*    <img src='https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-prisoner-cartoon-background-in-dark-prison-corner-crime-image_66770.jpg' />*/}
            {/*</div>*/}
            <div className={classes.profile}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : avatarPhoto} />
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className={classes.discription}>
                    <h4>Alex Moren</h4>
                    <div className={classes.info}>
                        <p>Date if Birth: 3 april 1993</p>
                        <p>City: Bobruisk</p>
                        <p>Education: High School</p>
                        <p>Web site: няма</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;