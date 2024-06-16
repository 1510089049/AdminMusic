import request from '@/utils/request';

// 登录
export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}

// 上传文件 resourceType: image | media | avatar
export function uploadFile (data, resourceType) {
  return request({
    url: `/resource/${resourceType}`,
    method: 'post',
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

// 获取用户信息
export function getUserInfo () {
  return request({
    url: `ping`,
    method: 'get',
  })
}

// 获取服务器汇总的资源文件
export function getResource (resourceType) {
  return request({
    url: `/resource/${resourceType}`,
    method: 'get',
  })
}

// 收藏量饼图数据
export function dashboardLike () {
  return request({
    url: `/dashboard/like`,
    method: 'get',
  })
}