<template>
  <div class="nav">
    <div class="hide"></div>
    <div class="content">
      <div class="wrap layout h-100">
         <!--logo-->
        <div class="logo">
          <h1>{{info.blogName}}</h1>
          <nuxt-link :to="{name:'index'}">
<!--            <img :src="info.logo" alt="" class="vertical-middle" width="130" height="40">-->
          </nuxt-link>
        </div>
         <!--logo-->
        <!--nav-->
        <div class="nav-wrapper h-100">
          <ul class="nav-menu h-100">
            <li class="nav-item" v-for="item in menu" :key="item.key">
              <nuxt-link v-if="item.object === 'category'" :to="{name:`${item.object}-id`,params:{id:1},query:{type: item.object_id, title: item.title}}" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <nuxt-link v-else-if="item.object === 'page'" :to="{name:'page-id',params:{id:item.object_id}}" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <nuxt-link v-else-if="item.object === 'post_tag'" :to="{name:'tags-id',params:{id:1},query:{type: item.term_id, title: item.name}}" class="first-link">
                {{ item.title }}
              </nuxt-link>
              <a v-else-if="item.object === 'custom' "class="first-link" :href="item.url">
                {{ item.title }}
              </a>
              <!--二级菜单-->
              <div v-if="item.children.length !== 0" class="sub-nav-wrapper">
                <ul class="sub-nav-menu">
                  <li class="sub-nav-item" v-for="children in item.children" :key="children.key">
                    <nuxt-link v-if="item.object === 'category'" :to="{name:'category-id',params: { id: 1 },query:{type: children.object_id, title: children.title}}">
                      {{children.title}}
                    </nuxt-link>
                    <nuxt-link v-else-if="item.object === 'page'" :to="{name: 'page-id',params: { id: children.object_id }}">
                      {{children.title}}
                    </nuxt-link>
                    <nuxt-link v-else-if="item.object === 'post_tag'" :to="{ name: 'tags-id', params: { id: 1 }, query: { type: children.object_id, title: children.title }}">
                      {{children.title}}
                    </nuxt-link>
                    <a v-else-if="item.object === 'custom'" :href="children.url">
                      {{children.title}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--nav-->
        <!--搜索栏-->
        <div class="search">
          <div class="search-wrapper" >
            <div class="search-content">
              <el-input size="small" placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-button  size="small" slot="append" icon="el-icon-search" @click="search"></el-button>
              </el-input>
            </div>
          </div>
          <el-button class="search-btn" size="small" type="primary" icon="el-icon-edit"></el-button>
          <el-button class="menu-btn" size="small" type="primary" icon="el-icon-s-fold"></el-button>
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
      search(){
        this.$router.push({
          name:"search",
          query:{
            page:1,
            search:this.input
          }
        })
        this.input=""
      }
    }
  }
</script>

<style scoped lang="less">

.nav{
  width: 100%;
  height: @headerHeight;
  position: relative;
  background: #fff;
  font-size: 16px;
  .hide{
    height: @headerHeight;
  }
  .content{
    background: #fff;
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
     text-align: center;
     position: relative;
     width: 100px;
     a{
       display: inline-block;
       width: 100%;
       height: 100%;
     }
     .first-link{
       display: block;
       padding: 0 10px;
       line-height: @headerHeight;
     }
     .sub-nav-wrapper{
       position: absolute;
       top: 100%;
       left: 50%;
       transform: translateX(-50%);
       display: none;
       width: 150px;
       .sub-nav-menu{
         position: relative;
         top: 10px;
         background:@color-white ;
         border-radius: @border-radius;
         .sub-nav-item{
           line-height: 40px;
           color: #ab9399;
           border-radius: @border-radius;
           &:hover{
             background: @color-theme;
             a{
               color: #fff;
             }
           }
         }
       }
     }
     &:hover{
       border-bottom: 2px solid @color-theme;
       .first-link{
         color:@color-theme ;
       }
       .sub-nav-wrapper{
         display: block;
       }
     }
   }
  }
  //搜索栏
  .search{
    .search-wrapper{
      width: 230px;
      .search-content{
        border-radius: 1px solid @color-main-background;
        border-radius: @border-radius;
        button{
          width: 20px;
        }
        /deep/ .el-input-group__append{
          width: 20px;
        }
      }
    }
    .search-btn{
      display: none;
    }
    .menu-btn{
      display: none;
    }
  }
}
</style>
