//封装倒计时逻辑函数
import {computed, onUnmounted, ref} from 'vue'
import dayjs from 'dayjs'

let timer=null
export const useCountDown=()=>{
    //1.响应式的数据——显示绑定的数据
    const time=ref(0)
    //格式化时间为xx分xx秒
    const formatTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    //2.开启倒计时的函数
    const start=(currentTime)=>{
        //逻辑:每隔一秒显示-1
        //传入的currentTime作为倒计时时间
        formatTime.value=currentTime
        timer=setInterval(()=>{
            formatTime.value--
        },1000)
    }
    //组件销毁时清除定时器
    onUnmounted(()=>{
        timer&&clearInterval(timer)
    })
    return{
        formatTime,
        start
    }
}
