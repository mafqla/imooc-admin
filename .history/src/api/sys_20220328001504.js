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
      icode: '569eaa25fc281c41c566e1c7eb1006fc'
    }
  })
}
