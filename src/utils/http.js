//1.axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
//这里引入的是路由器
import router from '@/router'
//2.创建axios实例
const httpInstance =axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

const userStore=useUserStore()

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //请求拦截器携带token作为用户标识去获取数据
  //1.从pinia获取token数据
  const token=userStore.userInfo.token
  //2.按照后端的要求拼接数据
  if(token){
    config.headers.Authorization=`Bearer${token}`
  }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
httpInstance.interceptors.response.use(res =>res.data, e => {
  // 登陆错误统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  //401token长时间无操作失效处理
  //1.清理用户本地数据
  //2.跳转到登录页
  if(e.response.status=== 401){
    userStore.clearUserInfo()
    router.replace('/login')
  }
    return Promise.reject(e)
  })
  
  
export default httpInstance