import React from 'react';
import Paginator from "../common/paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, portionSize, ...props}) => {


    return <div>

        <Paginator currentPage={currentPage} totalItemsCount={totalUserCount} pageSize={pageSize} onPageChanged={onPageChanged}/>

        {
            users.map(u => <User user={u} key={u.id} isFollowingProgress={props.isFollowingProgress} follow={props.follow} unfollow={props.unfollow} />)
        }

    </div>
}

export default Users;