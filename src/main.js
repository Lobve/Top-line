import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入并配置vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 适配rem
import 'amfe-flexible'

// 引入公共css
import './styles/common.less'

// 表单验证
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
// 默认是input事件触发，可以改成 blur 事件触发
Vue.use(VeeValidate, {
  events: 'blur'
})
Validator.localize('zh-cn', zhCN)

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
