// 封装购物车模块
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useCartStore=defineStore('cart',()=>{
    //1.定义state-carList
    const carList=ref([])
    //2.定义action-addCart
    const addCart=(goods)=>{
        //添加购物车操作
        //1.已经添加过——count+1
        //2.没有添加过——直接push
        //思路：通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过
        const item=carList.value.find((item)=>item.skuId===goods.skuId) //carList用find方法能否找到传入goods对象中的skuId与之前存储的相同skuID
        if(item){
            item.count++
        }
        else {
            carList.value.push(goods)
        }
    }
    //3.定义actionn-delCart
    const delCart=(skuId)=>{
        //思路：
        //1.找到要删除的项的下标值-splice
        //2.使用数组的过滤方法-filter
        //1.
        const idx=carList.value.findIndex((item)=>{skuId===item.skuId})
        carList.splice(idx,1)
    }
    return{
        carList,
        addCart,
        delCart
    },{
        //pinia-plugin-persistedstate持久化插件的配置项：使整个Store使用默认持久化保存,全局注册插件需要用的时候加这个配置项即可
        persist: true,
      }
})