import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data,
    headers: {
      codeType: '1648485623',
      icode: 'df1f78bc91d4d0f72abddb548529c673'
    }
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    headers: {
      codeType: '1648485623',
      icode: 'df1f78bc91d4d0f72abddb548529c673'
    }
  })
}
