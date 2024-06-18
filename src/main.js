import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 权限文件

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
