<template>
  <div :class="['footer',errorInfo.code && 'is-error',menuStatus && 'is-show-menu']">
    <div class="wrap">
      <div class="link-wrap" v-if="links.length && $route.name === 'index'">
        <a v-for="(item,index) in links" href="item.url" :key="index" :target="item.target" :title="item.description"></a>
      </div>
      <div class="copyright">
        <ul class="footer-menu">
          <li class="footer-item" v-for="item in subMenu" :key="item.key">
            <nuxt-link v-if="item.object === 'category'">
              {{item.title}}
            </nuxt-link >
            <nuxt-link v-else-if="item.object === 'page'">
              {{item.title}}
            </nuxt-link>
            <a v-else-if="item.object === 'custom'" :href="item.url">
              {{item.title}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--返回顶部-->
    <div class="back-top" @click="goTop" :class="{show:isShowBackTop}">

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "defaultFooter",
    data(){
      return {
        isShowBackTop:false
      }
    },
    mounted() {
    
    },
    computed:{
      ...mapState(['menuStatus', 'links', 'subMenu', 'errorInfo'])
    },
    methods:{
      goTop(){
        window.scrollTo(0,0)
      }
    }
  }
</script>

<style scoped lang="less">
.footer{
  margin-top: @container-margin;
  padding: 20px 0;
  background:#ccc;
  &.is-error{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  &.is-show-menu{
    transform: translateX(-240px);
  }
  .link-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border: 1px solid #ccc;
    line-height: 5;
  }
}
</style>
