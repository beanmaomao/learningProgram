//封装轮播图业务
//搬运主轮播图的逻辑（分类页面的轮播图）
import { getBannerAPI } from '@/apis/home'
import {ref} from 'vue'

const bannerList=ref([])

export function useBanner(){
  const getBanner=async()=>{
    //params，query参数以对象形式传递
      const res =await getBannerAPI({
      //参数名distributionSite为2的值是将放置位置变化
        distributionSite:'2'
      })
      console.log(res);
      bannerList.value=res.result
  }
  onMounted(()=>getBanner())
  
  return{
    bannerList
  }
}
