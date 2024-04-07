//封装分类业务
//引入函数在组件内部获取路由参数
import { useRoute } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'
import { ref,onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory(){
    //请求二级分类参数(渲染面包屑)
    const categoryData=ref({})
    const route=useRoute()
    //默认是route的id参数，当传入参数时会变成新的id参数
    const getCategory= async (id=route.params.id) =>{
    const res=await getCategoryAPI(id)
    categoryData.value=res.result
  }
onMounted(()=>getCategory())
  
 //路由参数变化时，把分类数据接口重新发送
onBeforeRouteUpdate((to)=>{
    //使用最新的路由参数请求最新的分类数据：route.params.id属于滞后数据
    //"to"能获取目标路径参数
    getCategory(to.params.id)
  })
  
  return{
    categoryData
  }
   
}

