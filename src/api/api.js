import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "2f40007e-3ab8-4199-871c-75f3dd3c886e"
	}
})


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {})
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	}
}

