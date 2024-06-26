//调用网络接口
import request from '@/utils/http'
//封装获取二级分类的菜单
export function getCategoryAPI (id) {
    return request({
        url:'/category',
        params: {
            id
        }
    })
}

/**
 * @description: 获取二级分类列表数据（二级路由下的链接的相关数据）
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return request({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }
  

  /**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     //sortField为筛选条件参数
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}