<script setup>
import { getOrderAPI } from '@/apis/pay';
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import { useCountDown } from '@/composables/useCountDown';
//获取支付的详情信息
const payInfo=ref({})
const route=useRoute()
const{ formatTime,start }=useCountDown()
const getPayInfo=async ()=>{
    //route.query.id:获取路由参数（订单Id）
    const res=await getOrderAPI(route.query.id)
    payInfo.value=res.result
    //初始化倒计时秒数
    start(res.result.countdown)
}
onMounted(()=>getPayInfo())

//跳转支付
//携带订单id以及回调地址跳转到支付地址（get)
//支付地址
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const backURL = 'http://127.0.0.1:5173/paycallback'
const redirectUrl = encodeURIComponent(backURL)
//三方平台的拼接地址（后端给的 ）
const payUrl = `${baseURL}pay/aliPay?orderId=${route.query.id}&redirect=${redirectUrl}`


</script>


<template>
  <div class="xtx-pay-page">
    <div class="container">
      <!-- 付款信息 -->
      <div class="pay-info">
        <span class="icon iconfont icon-queren2"></span>
        <div class="tip">
          <p>订单提交成功！请尽快完成支付。</p>
          <p>支付还剩 <span>{{ formatTime }}</span>, 超时后将取消订单</p>
        </div>
        <div class="amount">
          <span>应付总额：</span>
          <span>¥{{ payInfo.payMoney?.toFixed(2) }}</span>
        </div>
      </div>
      <!-- 付款方式 -->
      <div class="pay-type">
        <p class="head">选择以下支付方式付款</p>
        <div class="item">
          <p>支付平台</p>
          <!-- 微信支付 -->
          <a class="btn wx" href="javascript:;"></a>
          <!-- 支付宝支付 -->
          <a class="btn alipay" :href="payUrl"></a>
        </div>
        <div class="item">
          <p>支付方式</p>
          <a class="btn" href="javascript:;">招商银行</a>
          <a class="btn" href="javascript:;">工商银行</a>
          <a class="btn" href="javascript:;">建设银行</a>
          <a class="btn" href="javascript:;">农业银行</a>
          <a class="btn" href="javascript:;">交通银行</a>
        </div>
      </div>
    </div>
  </div>
</template>