// 封装购物车模块
import { defineStore } from 'pinia'
import { ref,computed } from 'vue'

export const useCartStore=defineStore('cart',()=>{
    //1.定义state-carList
    const cartList=ref([])
    //2.定义action-addCart：加入购物车
    const addCart=(goods)=>{
        //添加购物车操作
        //1.已经添加过——count+1
        //2.没有添加过——直接push
        //思路：通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过
        const item=cartList.value.find((item)=>item.skuId===goods.skuId) //carList用find方法能否找到传入goods对象中的skuId与之前存储的相同skuID
        if(item){
            item.count++
        }
        else {
            cartList.value.push(goods)
        }
    }
    //3.定义action-delCart：删除购物车
    const delCart=(skuId)=>{
        //思路：
        //1.找到要删除的项的下标值-splice
        //2.使用数组的过滤方法-filter
        //1.
        const idx=carList.value.findIndex((item)=>{skuId===item.skuId})
        cartList.splice(idx,1)
    }
    //4.定义计算属性计算总价-reduce累加器
    const allCount=computed(()=>{
        //总数量：所有项ount之和
        cartList.value.reduce((a,c)=>a+c.count,0)
    })
    const allPrice=computed(()=>{
        // 总价：所有项的count*price之和
        cartList.value.reduce((a,c)=>a+c.count*c.price,0)
    })
    //5.定义单选购物车内商品的功能
    const singleCheck=(skuId,selected)=>{
        //通过skuId找到要修改的那一项，然后把它的selected修改为传过来的selectd
        const item=cartList.value.find((item)=>item.skuId===skuId)
        item.selected=selected
    }
    //6.所有单选决定全选
    //用数组的every方法只有cartList中的每一项selected都为true时isAll的值才为true
    const isAll=computed(()=>cartList.value.every((item)=>item.selected))
    //7.全选决定所有单选
    const allCheck=(selected)=>{
        //用forEach方法把cartList中的每一项的selected属性都设置为全选框传入的状态
        cartList.value.forEach(item=>item.selected=selected)
    }
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck
    },{
        //pinia-plugin-persistedstate持久化插件的配置项：使整个Store使用默认持久化保存,全局注册插件需要用的时候加这个配置项即可
        persist: true,
      }
})