//管理用户数据相关
import { defineStore } from "pinia";
import {ref} from 'vue'
import {loginAPI} from '@/apis/user'


export const useUserStore=defineStore('user',()=>{
    //1.定义管理用户数据的state
    const userInfo=ref({})
    //2.定义获取接口数据的action函数
    const getUserInfo=async ({account,password})=>{
        const res=await loginAPI({account,password})
        userInfo.value=res.result
    }
    //4.退出时清除用户数据
     const clearUserInfo=async ()=>{
        userInfo.value={}
     }
    //3.以对象的形式把state和action return
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    },{
        //pinia-plugin-persistedstate持久化插件的配置项：使整个Store使用默认持久化保存
        persist: true,
      }
})