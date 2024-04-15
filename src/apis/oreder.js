import request from '@/utils/http'
//我的订单
/*
params: {
  orderState:0,(tab 切换状态)
  page:1,(页数)
  pageSize:2(每页的条数)
}
*/

export const getUserOrder = (params) => {
    return request({
      url:'/member/order',
      method:'GET',
      params
    })
  }