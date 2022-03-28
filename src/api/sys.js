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
      codeType: '1648476044',
      icode: 'ad71b1490d7022d21fe3f5c7a99ac867'
    }
  })
}
