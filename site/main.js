import 'ant-design-vue/dist/antd.css'
import '../components/style.js'
import './index.less'

import 'nprogress/nprogress.css'
import 'highlight.js/styles/solarized-light.css'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import VueClipboard from 'vue-clipboard2'
import Api from './components/api.vue'
import Md from './components/md'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerCom'
import demoBox from './components/demoBox'
import demoContainer from './components/demoContainer'
import zhCN from './theme/zh-CN'
import enUS from './theme/en-US'
import './assets/css/basic.css'

const mountedCallback = {
  install: (Vue, options) => {
    Vue.directive('mountedCallback', {
      inserted: function (el, binding, vnode) {
        binding.value(vnode)
      },
    })
  },
}

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(mountedCallback)
Vue.use(VueClipboard)
Vue.component(Api.name, Api)
Vue.component(Md.name, Md)
Vue.component('demo-box', demoBox)
Vue.component('demo-container', demoContainer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
