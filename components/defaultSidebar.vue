<template>
  <div class="wrap">
    <!--公告-->
    <div class="notice">
      <div class="header">
          孟洋的小站
      </div>
      <div class="content">

      </div>
      <ul>
        <li>

        </li>
      </ul>
    </div>
    <!--公告-->
    <!--评论-->
    <div class="comment">
      <div class="title">
        <p>
          最新评论
        </p>
      </div>
      <ul class="content">
        <li class="item">

        </li>
      </ul>
    </div>
    <!--评论-->
    <!--站点统计-->
    <div class="count">
      <div class="title">
        <p>站点统计</p>
      </div>
      <ul class="content">
        <li class="item">
          标签：{{}}个
        </li>
        <li class="item">
          文章：{{}}篇
        </li>
        <li class="item">
          页面：{{}}个
        </li>
        <li class="item">
          评论：{{}}条
        </li>
        <li class="item">
          分类：{{}}个
        </li>
        <li class="item">
          最后更新：{{}}
        </li>
      </ul>
    </div>
    <!--站点统计-->
    <!--标签云-->
    <div class="cloud">
      <div class="title">
        <p>
          标签云
        </p>
        <router-link :to="{ name: 'tags' }">更多</router-link>
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
  export default {
    name: "defaultSidebar"
  }
</script>

<style scoped>

</style>
