import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载插件

export const lazyPlugin={
    install(app){
    app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定的那个元素 img
        //binding:binding.value 指令等于号后面绑定的表达式的值 图片url
        console.log(el,binding.value);
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
              console.log(isIntersecting)
              if (isIntersecting) {
                // 进入视口区域
                //给src赋一个请求地址
                el.src = binding.value
                stop()
              }
            },
          )
    }
})
    }
}