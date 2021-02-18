<template>
  <view class="login">
    <view class="bg-login-box">
      <image mode="" class="bg-login-img" src="/static/login/bg-login.jpg"></image>
    </view>


    <view class="login-body">
      <view class="title text-white text-xl text-center">
        喂！还不快来玩一下！
      </view>

      <view class="tab">
        <view class="tab-box flex justify-between">
          <view :class="[
          'cu-tag', 'round', 
          'padding-lr-lg', 
          tab == 0 ?  'color-title' : 'text-white',
          tab == 0 ? '' : 'background-none']" @click="handleClickTab(0)">登录</view>
          <view :class="[
          'cu-tag', 'round', 
          'padding-lr-lg', 
          tab == 1 ?  'color-title' : 'text-white',
          tab == 1 ? '' : 'background-none']" @click="handleClickTab(1)">注册</view>
        </view>
      </view>
      <!-- 登录 -->
      <Login v-if="tab == 0"></Login>

      <!-- 注册 -->
      <Reg v-if="tab == 1"></Reg>


      <view class="">
        <divider text="其他登录方式" margin-top="120rpx"></divider>
      </view>

      <view class="flex justify-around">
        <view class="cu-avatar round" style="width: 100rpx; height: 100rpx">
          <image  style="width: 80%; height: 80%" src="/static/login/qq.png"></image>
        </view>
        <view class="cu-avatar round" style="width: 100rpx; height: 100rpx">
          <image  style="width: 70%; height: 70%" src="/static/login/weixin.png"></image>
        </view>
      </view>
    </view>
    

  </view>
</template>

<script>
import divider from '@/components/divider'
import Reg from './components/reg-form'
import Login from './components/login-form'
export default {
  components: {
    divider,
    Reg,
    Login
  },
  data() {
    return {
      tab: 0
    }
  },
  methods: {
    handleClickTab(i) {
      this.tab = i
    },
    
  },
}
</script>

<style lang="scss" scoped>
::v-deep .background-none {
  background: none !important;
}
::v-deep .solids-bottom {
  border-color: $main-title-color !important;
}
::v-deep .border-color-title {
  border-color: $main-title-color;
}
.login {
  .bg-login-box {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    .bg-login-img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .login-body {
    padding: 200rpx 60rpx 0 60rpx;
    .tab {
      margin-top: 80rpx;
      .tab-box {
        margin: 0 auto;
        width: 340rpx;
        
      }
    }

    
  }

}
</style>