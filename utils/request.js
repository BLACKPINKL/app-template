
import store from '@/store'

const request = (url, method, data, power) => {
	const headers = {}
	
	/* 权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
	== 1 不通过token校验的接口 且数据格式为json
	== 2 需要通过 token校验的接口
	== 3 数据以formdata形式发送
	*/
	switch (power) {
		case 1:
			break;
		case 2:
			headers['Authorization'] = 'bearer ' + store.getters.getAuthToken.access_token
			break;
		case 3:
			headers['Content-Type'] = "application/x-www-form-urlencoded"
			break;
	}


	return uni.request({
		url: store.getters.getAppCnf.baseUrl + url,
		method,
		data,
		dataType: 'json',
		header: headers
	}).then(res => {
	
		let statusCode = res[1].statusCode
		// 获取app配置
		const msg = store.getters.getAppCnf.msg
		// http状态码不是200
		if(statusCode != 200) {

			let title = msg[statusCode].msg || msg[500].msg
			uni.showToast({
				title,
				icon: 'none'
			})

			msg[statusCode].redirect ? setTimeout(() => {
				uni.reLaunch({
					url: msg[statusCode].redirect
				})
			}, 1500) : ''

			return Promise.reject(res[1])
		}else {
      // 自定义状态码如果不是200 
      if(res[1].data.code != 200){
        uni.hideLoading()
        uni.showToast({
          title: res[1].data.message,
          icon: 'none'
        })

        return Promise.reject(res[1].data)
      }

      return res[1].data
		}
	})
}

export default request
