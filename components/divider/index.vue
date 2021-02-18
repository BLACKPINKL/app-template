<template>
  <div class="divider divider-transparent" :style="{marginTop, marginBottom}">
    <view class="divider-line">
      
    </view>
    <span class="divider-text" :style="{color}">{{text}}</span>
    <view class="divider-line">
      
    </view>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    color: {
      type: String,
      default: 'rgb(144, 147, 153)'
    },
    marginTop: {
      type: [String],
      default: 0
    },
    marginBottom: {
      type: [String],
      default: '0rpx'
    }
  },
  
  data() {
    return  {

    }
  }
}
</script>

<style scoped>
.divider {
  width: 100%;
  position: relative;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
}

.divider-line {
  border-bottom: 1px solid #e4e7ed;
  transform: scaleY(.5);
  transform-origin: center;
  width: 200rpx;
}

.divider-text {
  white-space: nowrap;
  padding: 0 5px;
  display: inline-flex;
  color: rgb(144, 147, 153);
}

</style>