//引入样式初始化文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入懒加载插件并注册
import { lazyPlugin } from './directives'
const app=createApp(App)
const pinia=createPinia()

app.use(pinia)
app.use(lazyPlugin)
app.use(router)
app.mount('#app')
