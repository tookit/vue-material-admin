import request from '@/util/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: data
  })
}

//user

export function fetchUsers(query) {
  return request({
    url: '/user',
    method: 'get',
    params: query
  })
}
