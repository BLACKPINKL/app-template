import Vue from 'vue'
import App from './App'
import store from './store'
import MescrollBody from "./components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "./components/mescroll-uni/mescroll-uni.vue"
import uView from 'uview-ui'

Vue.use(uView);
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



