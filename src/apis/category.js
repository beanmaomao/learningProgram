//调用网络接口
import request from '@/utils/http'
//封装获取二级分类的菜单
export const getCategoryAPI=(id)=>{
    return request({
        url:'/category',
        params: {
            id
        }
    })
}