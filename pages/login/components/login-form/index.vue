<template>
  <view class="form">
    <view class="cu-form-group margin-top background-none">
      <text class='cuIcon-people color-theme margin-right-sm'></text>
      <input :value="form.phone" placeholder-class="color-title" placeholder="手机号" name="input"></input>
    </view>
    <view :style="{'border-bottom': '1px solid ' + themeColor.title}" class="cu-form-group background-none border-color-title">
      <text class='cuIcon-lock color-theme margin-right-sm'></text>
      <input :value="form.password" placeholder-class="color-title" type="password" placeholder="密码6到16位" name="input"></input>
    </view>

    <view class="form-submit text-center u-margin-top-80">
      <button @click="handleClickLogin" style="width: 80%" class="cu-btn lg bg-theme color-title">
        登录
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    handleClickLogin() {

    }
  },
}
</script>

<style>

</style>