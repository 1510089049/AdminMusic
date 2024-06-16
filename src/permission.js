import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/auth'
import ElementUI from 'element-ui';

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {

  NProgress.start()
  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 存在路由表-直接放行
      if (store.state.routes?.length > 0) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch("setUserInfo")
          // 设置动态路由
          store.dispatch("setRoutes")
          next({ ...to, replace: true })
        } catch (error) {
          store.dispatch("logout")
          ElementUI.Message.error(error + '已退出登录')
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})