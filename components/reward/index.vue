<template>
  <div v-show="isShow" class="reward-toast">
    <div class="mask" @click="$emit('closeReward', false)"></div>
    <div class="reward-toast-inner tc">
      <i class="el-icon-close" @click="$emit('closeReward',false)"></i>
      <div class="thumbnail">
        <el-image style="width: 80px; height: 80px" :src="content.thumbnail" fit="cover"></el-image>
      </div>
      <p class="summary">{{ content.text }}</p>
      <div class="reward-qrcode-wrap">
        <div class="left">
          <img  :src="content.wechatpay" class="reward-qrcode" width="150" height="150" alt="">
          <img src="../../assets/images/wechatpay.svg" width="80" alt="">
          
        </div>
        <div class="right">
          <img  :src="content.alipay" class="reward-qrcode" width="150" height="150" alt="">
          <img src="../../assets/images/alipay.svg" width="80" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reward",
  props: {
    content: {
      type: Object,
      default() {
        return {};
      }
    },
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="less">
.reward-toast {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: @color-mask;
  }
  .reward-toast-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 380px;
    height: 400px;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 5px;
    .el-icon-close {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
    .summary {
    font-size: 18px;
  }
  .thumbnail {
    padding: 30px 0 20px;
    /deep/ .el-image{
      border-radius: 50%;
    }
  }
  .reward-qrcode-wrap{
    margin: 15px 0;
    display: flex;

  }
  }
}
</style>