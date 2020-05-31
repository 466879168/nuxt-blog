<template>
  <transition name="msg-show">
    <div
      v-if="isShow"
      class="message clearfix tc"
      :class="[`alert-${type === undefined ? 'content' : type}`,{ 'align-center': center }, { 'box-center': wrapCenter }]"
    >
      <i v-if="showClose" class="el-icon-close" @click="leave"></i>
      <div class="message-content" :style="`width:${width}px`">
        <p class="text">
          <i class="status el-icon-s-data" ></i>
          {{msg}}
        </p>
        <p v-if="showImg && imgUrl" class="msg-img tc">
          <img :src="imgUrl" width="200" alt />
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      msg: null,
      icon: null,
      type: null,
      center: false,
      wrapCenter: null,
      isShow: false,
      showClose: false,
      showImg: false,
      closeTime: 0,
      width: 380,
      imgUrl: null
    };
  },
  methods: {
    leave() {
      this.isShow = false;
    },
    //显示消息
    show(
      {
        title,
        type,
        center,
        wrapCenter,
        showImg,
        imgUrl,
        showClose,
        duration = 2000,
        width = "initial"
      } = {},
      mark
    ) {
      this.isShow = mark;
      this.msg = title;
      this.type = type;
      this.center = center;
      this.wrapCenter = wrapCenter;
      this.closeTime = duration;
      this.showClose = showClose;
      this.showImg = showImg;
      this.width = width;
      this.imgUrl = imgUrl;
      switch (type) {
        case "success":
          this.icon = "icon-success-f";
          break;
        case "warning":
          this.icon = "icon-info-f";
          break;
        case "error":
          this.icon = "icon-close-f";
          break;
        default:
          this.icon = "icon-tips-f";
      }
      //关闭消息提示
      // if(this.closeTime){
      //   setTimeout(() => (this.isShow = false), this.closeTime);
      // }   
    }
  }
};
</script>

<style scoped lang="less">
.message {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transition: 0.7s;
  transform: translate(-50%,-50%);
  color: #000;
  .el-icon-close{
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
  }
  .message-content {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    padding: 25px;
    background: #fff;
    border-radius: @border-radius;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    .msg-img {
    margin-top: 10px;
  }
  }
}
</style>