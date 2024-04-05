import httpInstance from '@/utils/http'

//获取banner
export function getBannerAPI(params={}){
    //对传参params参数解构赋值并默认为字符串1
    const {distributionSite='1'}=params
    return httpInstance({
        url:'/home/banner',
        //配置params参数选择投放位置 默认为1 商品为2
        params:{
            distributionSite
        }
    })
}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */

//获取new
export const findNewAPI = ()=>{
    return httpInstance({
        url:'/home/new'
    })
}


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */

//获取Hot
export const getHotAPI = () => {
    return  httpInstance({
        url:'/home/hot'
    })
  }

  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }