import request from '@/utils/request';

// 用户列表
export function userList (data) {
  return request({
    url: '/admin/user/list',
    method: 'post',
    data,
  })
}

// 新增用户
export function addUser (data) {
  return request({
    url: '/admin/user',
    method: 'post',
    data,
  })
}

// 编辑用户
export function updateUser (data, username) {
  return request({
    url: `/admin/user/${username}`,
    method: 'patch',
    data,
  })
}

// 删除用户
export function deleteUser (username) {
  return request({
    url: `/admin/user/${username}`,
    method: 'delete',
  })
}

// 启用或禁用角色
export function enableUser (enable, username) {
  return request({
    url: `/admin/user/enable/${username}?enable=${enable}`,
    method: 'patch',
  })
}

// 获取角色列表
export function getRoles () {
  return request({
    url: `/admin/role`,
    method: 'get',
  })
}

// 为用户绑定角色
export function bindRoles (username, data) {
  return request({
    url: `/admin/user/bind/${username}`,
    method: 'post',
    data
  })
}