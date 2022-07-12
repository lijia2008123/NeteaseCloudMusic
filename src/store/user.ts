import { defineStore } from "pinia";
import { login, sendSms } from '@/api/user.js'
import { setToken, removeToken, setUserInfo, removeUserInfo } from '@/utils/auth'
import { Toast } from 'vant';

export const useUserStore = defineStore({
	id: 'user',
	state: () => {
		return {
		}
	},
	actions: {
		userLogin(info: object) {
			login({
				phone: info.phone,
				password: info.password,
				captcha: info.captcha
			}).then(res => {
				setToken(res.token)
				setUserInfo(JSON.stringify(res))
				Toast('欢迎回来！')
				location.reload()
			})
		},
		userLogout() {
			removeToken('token')
			removeUserInfo('userInfo')
		}
	}
})