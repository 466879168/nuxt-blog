<template>
  <div>
    <!--公告-->
    <div class="notice sidebar-list">
      <div class="header">
          xlrsr的小站
      </div>
      <div class="content">
        记录技术的网站
      </div>
      <ul>
        <li>

        </li>
      </ul>
    </div>
    <!--公告-->
    <!--评论-->
    <div class="comment sidebar-list">
      <div class="title">
        <p>
          最新评论
        </p>
      </div>
      <ul class="content">
        <li class="item" v-for="item in sidebar.newComment" :key="item.key">
          <template>

          </template>
        </li>
      </ul>
    </div>
    <!--评论-->
    <!--站点统计-->
    <div class="count sidebar-list">
      <div class="title">
        <p>站点统计</p>
      </div>
      <ul class="content">
        <li class="item">
          标签：{{sidebar.getAllCountTag}}个
        </li>
        <li class="item">
          文章：{{sidebar.getAllCountArticle}}篇
        </li>
        <li class="item">
          页面：{{sidebar.getAllCountPage}}个
        </li>
        <li class="item">
          评论：{{sidebar.getAllCountComment}}条
        </li>
        <li class="item">
          分类：{{sidebar.getAllCountCat}}个
        </li>
        <li class="item">
          最后更新：{{sidebar.lastUpDate}}
        </li>
      </ul>
    </div>
    <!--站点统计-->
    <!--标签云-->
    <div class="cloud sidebar-list">
      <div class="title">
        <p>
          标签云
        </p>
        <router-link :to="'1'">更多</router-link>
      </div>
      <ul>
        <li>

        </li>
      </ul>
    </div>
    <!--标签云-->
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "defaultSidebar",
    computed:{
      ...mapState({
        sidebar:state=>({
          newComment: state.info.newComment,
          isOpenTextThumbnail: state.info.isOpenTextThumbnail,
          isOpenAsideCount: state.info.isOpenAsideCount,
          getAllCountTag: state.info.getAllCountTag,
          getAllCountArticle: state.info.getAllCountArticle,
          getAllCountPage: state.info.getAllCountPage,
          getAllCountComment: state.info.getAllCountComment,
          getAllCountCat: state.info.getAllCountCat,
          lastUpDate: state.info.lastUpDate,
          tagCloud: state.info.tagCloud
        })
      })
    }
  }
</script>

<style scoped lang="less">
  .sidebar-list{
    margin-top: @container-margin;
    padding: @container-padding;
    border-radius: @border-radius;
    background: @color-white;
    &：first-of-type{
      margin-top: 0;
    }
    .title{
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid @color-border;
      p{
        position: relative;
        display: inline-block;
        &:after{
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100px;
          height: 2px;
          background: @color-theme;
        }
      }
    }
    .count{
      .content{
        .item{
          li{
            float: left;
            width: 100px;
          }
        }
      }
    }
  }
</style>
