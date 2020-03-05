import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b4e70832-d7f2-4bf3-a44f-4c30bbf3ab78'}
})


export default instance;