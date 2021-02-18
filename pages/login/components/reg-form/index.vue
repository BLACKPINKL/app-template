<template>
  <view class="form">
    <view class="cu-form-group margin-top background-none">
      <text class='cuIcon-people color-theme margin-right-sm'></text>
      <input 
      placeholder-class="color-title" 
      placeholder="手机号" 
      name="input"/>
    </view>
    <view class="cu-form-group background-none border-color-title">
      <text class='cuIcon-mark color-theme margin-right-sm'></text>
      <input 
        placeholder-class="color-title" 
        placeholder="短信验证码" 
        name="input"/>
      <button class='cu-btn bg-green shadow bg-theme color-title'>验证码</button>
    </view>
    <view  class="cu-form-group background-none border-color-title">
      <text class='cuIcon-lock color-theme margin-right-sm'></text>
      <input placeholder-class="color-title" type="password" placeholder="密码6到16位" name="input"/>
    </view>
    <view :style="{'border-bottom': '1px solid ' + themeColor.title}" class="cu-form-group background-none border-color-title">
      <text class='cuIcon-lock color-theme margin-right-sm'></text>
      <input placeholder-class="color-title" type="password" placeholder="确认密码6到16位" name="input"/>
    </view>

    <view class="form-submit text-center u-margin-top-80">
      <button @click="handleClickReg" style="width: 80%" class="cu-btn lg bg-theme color-title">
        注册
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleClickReg() {

    }
  },
}
</script>

<style lang="scss" scoped>
.background-none {
  background: none  !important;
}
.solids-bottom {
  border-color: $main-title-color  !important;
}
.border-color-title {
  border-color: $main-title-color;
}
.form {
  .form-submit {
    margin-top: 80rpx;
  }
}
</style>