// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
import _ from 'lodash'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
// 导入阿里字体
import './../common/regular/Alibaba-PuHuiTi-Regular.css'
import './../common/medium/Alibaba-PuHuiTi-Medium.css'
import './../common/light/Alibaba-PuHuiTi-Light.css'
import './../common/heavy/Alibaba-PuHuiTi-Heavy.css'
import './../common/bold/Alibaba-PuHuiTi-Bold.css'
import { Button, Rate } from 'ant-design-vue'
import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
// import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style
Vue.use(Button)
Vue.use(Rate)
Vue.config.productionTip = false
Vue.prototype.$_ = _
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
Vue.use(ElementUI, {
    size: 'medium',
    menuType: 'text'
  })
window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
