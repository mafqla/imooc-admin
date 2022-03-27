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
      codeType: '1648397682',
      icode: '3a4ab474c75a2c19e0e5f8dc748879e9'
    }
  })
}
