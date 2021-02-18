import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const app = getApp()
const store = new Vuex.Store({
	state: {
		// token信息 及一些基本的账户信息
		auth: '',
		// 账号信息
		userInfo: '',
		// 账号名 手机号
		username: '',
		
	},

	actions: {
		// 登录
		login({commit}, userData) {
			return login(userData).then(res => {
				// 记录token信息
				commit('SET_AUTHTOKEN', res.auth)
				// 记录账户信息
				commit('SET_USER', res.account)
				// 单独记录账号
				commit('SET_USERNAME', res.auth.userName)
				return res
			})
		},

		
	},
	mutations:{
		// 设置token信息
		SET_AUTHTOKEN(state, data) {
			state.auth = data
			data ? uni.setStorageSync(app.getConfigKey('local_auth'), data) 
					 : uni.removeStorageSync(app.getConfigKey('local_auth'))
		},
		// 设置账号名
		SET_USERNAME(state, username) {
			state.username = username
			uni.setStorageSync(app.getConfigKey('local_username'), username)
		},
	
		// 设置账户信息
		SET_USER(state, data) {
			state.userInfo = data
			data ? uni.setStorageSync(app.getConfigKey('local_userinfo'), data)
					 : uni.removeStorageSync(app.getConfigKey('local_userinfo'))
		},
	
		// 退出登录
		storeLogout(state){
			let _this = this
			uni.reLaunch({
				url: app.getConfigKey('url_login'),
				success() {
					//清除所有用户状态  还原初始 账户名需保留
					_this.commit('SET_USER', '')
					_this.commit('SET_AUTHTOKEN', '')
				}
			})
			
		}
	},
	getters: {
		getState(state){
			return state
		},
		// 获取账户
		getUser(state) {
			return state.userInfo || uni.getStorageSync(app.getConfigKey('local_userinfo')) || {}
		},
		getUsername(state) {
			return state.username || uni.getStorageSync(app.getConfigKey('local_username'))
		},
		
		// 获取token信息
		getAuthToken(state) {
			return state.auth || uni.getStorageSync(app.getConfigKey('local_auth')) || {}
		},
	},
})

export default store;