import axios from 'axios';
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import store from '@/store'
import settings from '@/settings';

const instance = axios.create({
  baseURL: settings.baseUrl,
  timeout: 60 * 1000,
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
},
  error => {
    console.error(error)
    return Promise.reject(error)
  }
);

// 响应拦截器
instance.interceptors.response.use(
  res => {
    const { data } = res
    if (data.code !== 0) {
      // token失效
      if ([2002, 2007].includes(data.code)) {
        store.dispatch("logout")
      }
      Message.error(data.msg)
    }
    return data
  },
  error => {
    console.error('请求错误' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
);

export default instance;
