import request from '@/utils/request';

/**
 * @description 启动广告配置
*/

// 获取启动广告配置
export function getSplash () {
  return request({
    url: `/splash`,
    method: 'get',
  })
}

// 启动广告配置
export function setSplash (data) {
  return request({
    url: `/admin/splash`,
    method: 'patch',
    data,
  })
}

/**
 * @description 轮播图配置
*/

// 获取轮播图配置
export function getBanner () {
  return request({
    url: `/banner`,
    method: 'get',
  })
}

// 配置轮播图
export function setBanner (data) {
  return request({
    url: `/admin/banner`,
    method: 'patch',
    data
  })
}