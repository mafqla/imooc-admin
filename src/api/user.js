import request from '@/utils/request'

export const feature = () => {
  return request({
    url: '/user/feature'
  })
}

// 获取章节模块
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
