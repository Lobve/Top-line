// 操作本地存储，把读写用户封装起来

export const setToken = (token) => {
  window.localStorage.setItem('token', JSON.stringify(token))
}

export const getToken = () => {
  return JSON.parse(window.localStorage.getItem('token'))
}

export const removeToken = () => {
  return window.localStorage.removeItem('token')
}
