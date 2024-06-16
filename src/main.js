import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 权限文件
import './permission'
// 全局样式
import './styles/index.scss'
// 全局组件
import components from '@/components'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
