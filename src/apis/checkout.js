//封装支付页面详情接口
import request from '@/utils/http'

export const getCheckInfoAPI=()=>{
    return request({
        url:'member/order/pre'
    })
}