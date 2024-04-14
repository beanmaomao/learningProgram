import request from '@/utils/http'

export const getOrderAPI=(id)=>{
    return request({
        //这里同样是带参数请求接口与带参数跳转二级页面做法要区别起来
        url:`/member/order${id}`
    })
}
