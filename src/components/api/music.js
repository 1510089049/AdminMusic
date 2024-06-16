import request from '@/utils/request';


/**
 * @description 艺术家
*/

// 艺术家列表
export function artistList (data) {
  return request({
    url: `/admin/artist/list`,
    method: 'post',
    data,
  })
}

// 新增艺术家
export function artistAdd (data) {
  return request({
    url: `/admin/artist/add`,
    method: 'post',
    data,
  })
}

// 编辑艺术家
export function artistUpdate (data, id) {
  return request({
    url: `/admin/artist/${id}`,
    method: 'patch',
    data,
  })
}

// 删除艺术家
export function artistDelete (id) {
  return request({
    url: `/admin/artist/${id}`,
    method: 'delete',
  })
}

/**
 * @description 专辑
*/

// 专辑列表
export function albumList (data) {
  return request({
    url: `/admin/album/list`,
    method: 'post',
    data,
  })
}

// 新增专辑
export function albumAdd (data) {
  return request({
    url: `/admin/album/add`,
    method: 'post',
    data,
  })
}

// 编辑专辑
export function albumUpdate (data, id) {
  return request({
    url: `/admin/album/${id}`,
    method: 'patch',
    data,
  })
}

// 删除专辑
export function albumDelete (id) {
  return request({
    url: `/admin/album/${id}`,
    method: 'delete',
  })
}

/**
 * @description 音乐
*/

// 音乐列表
export function musicList (data) {
  return request({
    url: `/admin/music/list`,
    method: 'post',
    data
  })
}

// 删除音乐
export function musicDelete (id) {
  return request({
    url: `/admin/music/${id}`,
    method: 'delete',
  })
}

// 新增音乐
export function musicAdd (data) {
  return request({
    url: `/admin/music`,
    method: 'post',
    data
  })
}

// 编辑音乐
export function musicUpdate (data, id) {
  return request({
    url: `/admin/music/${id}`,
    method: 'patch',
    data
  })
}

// 查询歌曲歌词
export function getLrc (id) {
  return request({
    url: `/lrc/${id}`,
    method: 'get',
  })
}

// 歌词设置
export function setLrc (data) {
  return request({
    url: `/admin/lrc`,
    method: 'post',
    data
  })
}