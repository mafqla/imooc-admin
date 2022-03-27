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
      'codeType': '1648392961',
      icode: 'b1b311642c0536dfc00f4b6e5864978f'
    }
  }
}