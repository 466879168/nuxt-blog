<template>
  <div class="nav">
    <div class="hide"></div>
    <div class="content">
      <div class="wrap layout h-100">
         <!--logo-->
        <div class="logo">
          <h1>{{info.blogName}}</h1>
          <nuxt-link :to="{name:'index'}">
            <img :src="info.logo" alt="" class="vertical-middle" width="130" height="40">
          </nuxt-link>
        </div>
         <!--logo-->
        <!--nav-->
        <div class="nav-wrapper h-100">
          <ul class="nav-menu h-100">
            <li class="nav-item" v-for="item in menu" :key="item.key">
              <nuxt-link v-if="item.object === 'category'" :to="'1'" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <nuxt-link v-else-if="item.object === 'page'" :to="'1'" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <nuxt-link v-else-if="item.object === 'post_tag'" :to="'1'" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <nuxt-link v-else-if="item.object === 'custom'" :to="'1'" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <!--二级菜单-->
              <div v-if="item.children.length !== 0" class="sub-nav-wrapper">
                <ul class="sub-nav-menu">
                  <li class="sub-nav-item" v-for="children in item.children" :key="children.key">
                    <nuxt-link v-if="item.object === 'category'" :to="'1'">
                      {{children.title}}
                    </nuxt-link>
                    <nuxt-link v-else-if="item.object === 'page'" :to="'1'">
                      {{children.title}}
                    </nuxt-link>
                    <nuxt-link v-else-if="item.object === 'post_tag'" :to="'1'">
                      {{children.title}}
                    </nuxt-link>
                    <nuxt-link v-else-if="item.object === 'custom'" :to="'1'">
                      {{children.title}}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--nav-->
        <!--搜索栏-->
        <div class="search">
          <div class="search-wrapper">
            <div class="cearch-content">
              <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <el-button size="small" type="primary" icon="el-icon-edit"></el-button>
          <el-button size="small" type="primary" icon="el-icon-s-fold"></el-button>
        </div>
        <!--搜索栏-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "defaultHeader",
    data(){
      return {
        input:"",
      }
    },
    computed:{
      ...mapState(["info","menu","menuStatus"])
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">

.nav{
  width: 100%;
  height: @headerHeight;
  position: relative;
  background: #fff;
  .hide{
    height: @headerHeight;
  }
  .content{
    position: fixed;
    top: 0;
    left: 0;
    z-index: @z-index;
    width: 100%;
    height: @headerHeight;
    box-shadow: @box-shadow;
  }
  .wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    h1{
      text-indent: -999em;
    }
  }
  .nav-wrapper{
    flex: 1;
    margin: 0 20px;
    .nav-menu{
      display: flex;
    }
   .nav-item{
     position: relative;
     width: 100px;
     .first-link{
       display: block;
       padding: 0 10px;
       line-height: @headerHeight;
     }
     &:hover{
       .sub-nav-wrapper{
         display: block;
       }
     }
   }
  }
  //搜索栏
  .search{
    .search-wrapper{
      width: 200px;
      .search-content{
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
