import Vue from 'vue'
import Vuex from 'vuex'
import { removeToken, setToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import {
  basicRoute
  , admin
  , general
  , noRole
} from '@/router/dynamicRouter'
import { getUserInfo } from '@/api/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {},
    // 路由数据
    routes: []
  },
  getters: {
  },
  mutations: {
    // 登出方法
    LOGOUt (state) {
      // 清空token & 状态
      removeToken()
      state.userInfo = {}
      state.routes = []
      router.push({ path: '/login' })
    },
    // 登录成功
    LOGIN_SUCCESS (state, token) {
      setToken(token)
      router.push({ path: '/' })
    },
    // 路由设置
    SET_ROUTES (state, routes) {
      const finalRoutes = basicRoute
      finalRoutes[0].children = routes
      finalRoutes[0].redirect = routes[0].path
      // 菜单只取传入的路由，不需要basicRoute
      state.routes = routes
      router.addRoutes(finalRoutes)
    },
    // 设置用户信息
    SET_USER_INFO (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    // 设置角色信息action
    setUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          if (res.code === 0) {
            commit('SET_USER_INFO', res.data)
            resolve(res.msg)
          } else {
            reject(res.msg)
          }
        }).catch(err => {
          resolve(err)
        })
      })
    },
    // 登出action
    logout ({ commit }) {
      resetRouter()
      commit("LOGOUt")
    },
    // 登录成功action
    loginSuccess ({ commit }, token) {
      commit("LOGIN_SUCCESS", token)
    },
    // 路由设置action
    setRoutes ({ commit }) {
      const isAdmin = this.state.userInfo?.roles.some(v => {
        return v.roleName === 'ADMIN'
      })
      if (!this.state.userInfo?.roles.length) {
        commit("SET_ROUTES", noRole)
      } else {
        commit("SET_ROUTES", isAdmin ? admin : general)
      }
    }
  },
  modules: {
  }
})
