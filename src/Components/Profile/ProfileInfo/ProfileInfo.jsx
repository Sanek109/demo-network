import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatarPhoto from '../../../assets/images/avatarPhoto.png';


const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.profile}>
                <div className={classes.avatar}>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                    <img src={profile.photos.large || avatarPhoto} />
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
                <div className={classes.discription}>
                    <h4>{profile.fullName}</h4>
                    <div className={classes.info}>
                        <div>
                            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes!' : 'No!' }
                        </div>
                        {profile.lookingForAJob && <div>
                            <b>My professional skills:</b> {profile.lookingForAJobDescription}
                        </div>}
                        <div>
                            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                            return <Contact  key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;