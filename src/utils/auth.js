export function getToken() {
  return localStorage.getItem('token')
}
export function setToken(token) {
  return localStorage.setItem('token', token)
}
export function removeToken(token) {
  return localStorage.removeItem(token)
}
export function getUserInfo(userInfo) {
  return localStorage.getItem('userInfo', userInfo)
}
export function setUserInfo(userInfo) {
  return localStorage.setItem('userInfo', userInfo)
}
export function removeUserInfo(UserInfo) {
  return localStorage.removeItem(UserInfo)
}