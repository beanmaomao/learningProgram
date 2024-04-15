//createRouter:创建路由实例对象
//createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
//引入组件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CarList from '@/views/CartList/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component规则
  routes: [
    {
      path:'/',
      component:Layout,
      //二级路由默认页路由配置为空
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        }, 
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',
          component:CarList
        },
        {
          path:'checkout',
          component:CheckOut
        },{
          path:'pay',
          component:Pay
        },{
          path:'paycallback',
          component:PayBack
        },{
          path:'member',
          component:Member,
          children:[
            {
              path:'user',
              component:UserInfo
            },
            {
              path:'order',
              component:UserOrder
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ],
  //路由行为定制(浏览分类数据时点击二级分类列表跳转至顶部)
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
