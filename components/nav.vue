<template>
  <div class="nav">
    <div class="hide"></div>
    <div class="content">

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "header",
    data(){
      return {

      }
    },
    computed:{
      ...mapState(["info","menu","menuStatus"])
    }
  }
</script>

<style scoped lang="less">
.nav{
  width: 100%;
  height: 60px;
  position: relative;
  background: #fff;
}
</style>
