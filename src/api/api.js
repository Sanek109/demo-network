import instance from "./instance";

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, remeberMe = false) {
        return instance.post(`auth/login`, {email, password, remeberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    },
}


