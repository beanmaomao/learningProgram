<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router';

const userStore=useUserStore()
const router=useRouter()

const confirm=()=>{
//定义退出登录业务逻辑实现
  //1.清楚业务信息
  userStore.clearUserInfo()
  router.replace('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- v-if和v-else:多模板渲染 区分登陆状态和非登陆状态 -->
        <!-- userInfo中的token数据用于标识当前用户是否登录 -->
        <!--  v-if=" userStore.userInfo.token" -->
        <!-- {{ userStore.userInfo.account }} -->
        <template v-if="true">
          <li><a href="javascript:;"><i class="iconfont icon-user">11</i></a></li>
          <li>
            <!-- el-popconfirm组件自带comfirm事件，点击确认按钮调用函数 -->
            <el-popconfirm title="确认退出吗?" @confirm="confirm" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>