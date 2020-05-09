<template>
  <div id="app">
    <div :class="['mask',menuStatus && 'is-show-menu']" @click="closeMenu"></div>
    <default-header></default-header>
    <div :class="['main',menuStatus && 'is-show-menu']">
      <div class="wrap">
        <div class="content">
          <nuxt />
        </div>
        <default-sidebar class="sidebar-wrap"></default-sidebar>
      </div>
    </div>
    <default-footer></default-footer>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import defaultHeader from "~/components/defaultHeader"
  import defaultFooter from "~/components/defaultFooter"
  import defaultSidebar from "~/components/defaultSidebar";
  export default {
    name:"default",
    components:{
      defaultHeader,
      defaultFooter,
      defaultSidebar
    },
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['menuStatus'])
    },
    methods:{
      closeMenu(){
        this.$store.commit("updateMenuStatus",false)
      }
    }
  }
</script>

<style scoped lang="less">
#app{
  .main{
    .wrap{
      display: flex;
      justify-content:space-between;
      margin-top: @container-margin;
      .content{
        width: 900px;
      }
      .sidebar-wrap{
        width: 280px;
      }
    }
  }
}

  @media screen and (max-width: 1024px){
    .wrap{
      .content{
        width: 100px;
      }
      .sidebar-wrap{
        display: none;
      }
    }
  }
</style>
