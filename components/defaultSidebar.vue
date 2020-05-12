<template>
  <div class="comment-wrap">
    <!--公告-->
    <div class="notice sidebar-list">
      <div class="header">
        xlrsr的小站
      </div>
      <div class="content">
        记录技术的网站
      </div>
      <ul>
        <li></li>
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
        <!---->
        <li
          class="item clearfix"
          v-for="item in sidebar.newComment"
          :key="item.key"
        >
          <div class="img-wrap">
            <p
              v-if="sidebar.isOpenTextThumbnail"
              class="thumbnail-text"
              :style="{ background: item.background }"
            >
              {{ item.author.substr(0, 1) }}
            </p>
            <img
              v-else
              :src="item.avatar"
              alt=""
              class="thumbnail"
              width="50"
              height="50"
            />
          </div>
          <div class="right">
            <h3 class="author">{{ item.author }}</h3>
            <p class="evaluation-content">
              {{ item.content.replace(/\[img\]\S+\[\/img\]/, "[图片]") }}
            </p>
            <nuxt-link
              v-if="item.postType === 'post'"
              class="linkto"
              :to="'1'"
            >
              评：{{ item.title }}
            </nuxt-link>
            <nuxt-link
              v-else-if="item.postType === 'page'"
              class="block title"
              :to="'1'"
            >
              评：{{ item.title }}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <!--评论-->
    <!--站点统计-->
    <div class="count sidebar-list">
      <div class="title">
        <p>站点统计</p>
      </div>
      <ul class="content clearfix">
        <li>标签：{{ sidebar.getAllCountTag }}个</li>
        <li>文章：{{ sidebar.getAllCountArticle }}篇</li>
        <li>页面：{{ sidebar.getAllCountPage }}个</li>
        <li>评论：{{ sidebar.getAllCountComment }}条</li>
        <li>分类：{{ sidebar.getAllCountCat }}个</li>
        <li>最后更新：{{ sidebar.lastUpDate }}</li>
      </ul>
    </div>
    <!--站点统计-->
    <!--标签云-->
    <div class="cloud sidebar-list">
      <div class="title">
        <p>
          标签云
        </p>
        <router-link :to="{name:'tags'}">更多</router-link>
      </div>
      <div class="content">
        <div v-for="(item, index) in sidebar.tagCloud" :key="index">
          <div
            :key="item.key"
            v-if="index < 20"
            class="list"
            :class="`color-${Math.floor(Math.random() * 8 + 1)}`"
          >
            <nuxt-link :to="'1'">
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--标签云-->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "defaultSidebar",
  computed: {
    ...mapState({
      sidebar: state => ({
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
};
</script>

<style scoped lang="less">
.comment-wrap {
  .sidebar-list {
    margin-top: @container-margin;
    padding: @container-padding;
    border-radius: @border-radius;
    background: @color-white;
    &：first-of-type {
      margin-top: 0;
    }
    .title {
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid @color-border;
      p {
        position: relative;
        display: inline-block;
        &:after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 70px;
          height: 2px;
          background: @color-theme;
        }
      }
    }
  }
  .count {
    .content {
      line-height: 30px;
      li:nth-child(odd) {
        width: 100px;
        float: left;
      }
      li:nth-child(even) {
        width: 140px;
        float: left;
      }
    }
  }
  .cloud {
    .title {
      a {
        position: relative;
        left: 175px;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      .list {
        margin: 10px 5px 0 0;
        padding: 3px 5px;
        border-radius: @border-radius;
        a {
          color: @color-white;
        }
        &.color-1 {
          background: #f3a683;
        }
        &.color-2 {
          background: #778beb;
        }
        &.color-3 {
          background: #e77f67;
        }
        &.color-4 {
          background: #f5cd79;
        }
        &.color-5 {
          background: #0fb9b1;
        }
        &.color-6 {
          background: #f8a5c2;
        }
        &.color-7 {
          background: #596275;
        }
        &.color-8 {
          background: #20bf6b;
        }
      }
    }
  }
  .comment {
    .content {
      .item {
        width: 100%;
        padding: 8px 0;
        border-bottom: 1px solid @color-main-background;
        &:last-of-type {
          border: 0;
        }
        &:hover {
          .thumbnail {
            transform: rotate(666turn);
            transition-delay: 1s;
            transition-duration: 59s;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
          }
        }
        .img-wrap {
          width: 50px;
          float: left;
          .thumbnail {
            margin-right: 10px;
            border-radius: @border-radius;
          }
          .thumbnail-text {
            width: 50px;
            margin-right: 10px;
            border-right: @border-radius;
            font-size: 28px;
            text-align: center;
            line-height: 50px;
            text-transform: uppercase;
            color: #fff;
          }
        }
        .right {
          width: 200px;
          float: right;
          .author{
            color: @color-theme;
          }
          .evaluation-content{
            font-size: @font-size-small;
            word-wrap: break-word;
          }
          .linkto{
            color: @color-theme;
          }
        }
      }
    }
  }
}
</style>
