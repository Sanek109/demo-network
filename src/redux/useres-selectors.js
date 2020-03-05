import {createSelector} from 'reselect';

export const getUsers = (state) => {
    return state.userReducer.users
}

export const getUsersSuper = createSelector(() => {

})

export const getPageSize = (state) => {
    return state.userReducer.pageSize
}

export const getTotalUserCount = (state) => {
    return state.userReducer.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.userReducer.currentPage
}

export const getIsFetching = (state) => {
    return state.userReducer.isFetching
}

export const  getIsFollowingProgress = (state) => {
    return state.userReducer.isFollowingProgress
}

export const getPortionSize = (state) => {
    return state.userReducer.portionSize
}