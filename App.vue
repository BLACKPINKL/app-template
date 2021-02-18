<script>
	import Vue from 'vue'
	import configKey from './config/keys'
	import configApp from './config/app'
	import getColor from './config/color'
	export default {
		onLaunch() {
			// 挂载获取颜色方法
			Vue.prototype._getColor = getColor
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		},
		methods: {
			// 获取app常量
			getConfigKey(key = '') {
				key = key.toUpperCase()
				return configKey[key]
			},
			// 获取系统配置
			getConfigApp(key) {
				return configApp[key]
			}
		},
		

	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
