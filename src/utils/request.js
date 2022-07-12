import axios from 'axios'
import { getToken, removeToken } from './auth'
import { Toast } from 'vant';
import { servicesVersion } from 'typescript';

const service = axios.create({
  baseURL: '/api',
  timeout: 6000000
})

service.interceptors.request.use(config => {
  config.withCredentials = true
  if(getToken()) {
    config.headers['Authorization'] = getToken()
  }
  return config
})

service.interceptors.response.use(respones => {
  console.log('respones',respones);
  const res = respones.data
  if (res.code === 400) {
    Toast('用户不存在！')
  } else if (res.code === 502) {
    Toast(res.message)
  } else if (res.code === 200) {
    return res
  }
}, error => {
  return Promise.reject(error)
})

export default service