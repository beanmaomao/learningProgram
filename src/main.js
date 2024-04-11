//引入样式初始化文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入懒加载插件并注册
import { lazyPlugin } from './directives'
//引入全局组件插件
import { componentPlugin } from './components/index'
const app=createApp(App)
const pinia=createPinia()

app.use(pinia)
app.use(lazyPlugin)
app.use(router)
app.use(componentPlugin)
app.mount('#app')
