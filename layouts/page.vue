<template>
  <div class="container">
    <div class="menu-mask">
      <default-header></default-header>
      <div class="main layout">
        <div class="wrap">
          <div class="content">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
    <default-footer></default-footer>
  </div>
</template>

<script>
import defaultHeader from "~/components/defaultHeader"
import defaultFooter from "~/components/defaultFooter"
import { mapState } from "vuex";
export default {
  name:"page",
  components:{
    defaultHeader,
    defaultFooter
  },
  computed:{
    ...mapState(["menuStatus"])
  },

}
</script>

<style lang="less" scoped>
.wrap{
  display: flex;
  justify-content: space-between;
  margin-top: @container-margin;
  .content{
    width: 100%;
  }
}
</style>