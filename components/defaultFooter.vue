<template>
  <div class='footer'>
    <div class="wrap">
      <div class="link-wrap" v-if="$route.name === 'index'">
        <a v-for="(item,index) in links" href="item.url" :key="index" :target="item.target" :title="item.description"></a>
      </div>
      <div class="copyright layout">
        <div class="wrap">
          <ul class="footer-menu">
            <li class="list" v-for="item in subMenu" :key="item.key">
              <nuxt-link v-if="item.object == 'category'" :to="{name:'category-id',params:{id:1},query:{type:item.object_id,title: item.title}}">
                {{item.title}}
              </nuxt-link>
              <nuxt-link v-if="item.object == 'page'" :to="{name:'page-id',params: { id: item.object_id }}">
                {{item.title}}
              </nuxt-link>
              <a v-else-if="item.object === 'custom'" :href="item.url">
                {{item.title}}
              </a>
            </li>
          </ul>
          <div class="record">
            <a href="http://www.beian.miit.gov.cn/" target="_blank">豫ICP备20022400号</a>
          </div>
          <div class="theme">
             <a href="https://www.xuanmo.xin" target="_blank">Theme by Xuanmo</a>
          </div>
        </div> 
      </div>
    </div>
    <!--返回顶部-->
    <div class="back-top" @click="goTop" :class="{show:isShowBackTop}">
      回到顶部
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
      let self=this
      window.addEventListener('scroll',function  () {
        self.isShowBackTop=this.scrollY>300
      })
    },
    watch:{
    },
    computed:{
      ...mapState(['menuStatus', 'links', 'subMenu', 'errorInfo']),
      ...mapState({
        copyright:state=>state.info.copyright
      })
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
  background:#2d3237;
  div{
    color: #9295a2;
  }
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
    // border: 1px solid #3b424a;
    line-height: 2;
    &::after{
      content: "";
      flex: aoto;
    }
  }
  /deep/ a{
      display: block;
      margin-right: @container-margin;
      font-size: @font-size-base;
      color: #9295a2;
      &:hover{
        color: @color-theme;
      }
    }
  .copyright{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .back-top{
    position: fixed;
    z-index: 99;
    right: 30px;
    bottom: 40px;
    transition: .5s;
    transform: translateX(100px);
    cursor:pointer;
    &.show{
      transform: translateX(0);
    }
  }
}
</style>
