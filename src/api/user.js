import request from '@/utils/request'

export function login(params) { // 登录
  return request({
    url: '/login/cellphone/',
    method: 'get',
    params
  })
}
export function sendSms(params) { // 发送验证码
  return request({
    url: '/captcha/sent/',
    method: 'get',
    params
  })
}