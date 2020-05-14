<template>
  <div class="container">
    <article class="article">
      <h2 class="title">
        <span class="">
          {{detail.title.rendered}}
        </span>
      </h2>
      <div class="content-details">
        {{detail.content.rendered}}
      </div>
    </article>
    <div class="comment">
      <h2 class="cmment-title">
        {{`共 ${detail.pageInfor.commentCount} 条评论关于 “${detail.title.rendered}”`}}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "_id"
  }
</script>

<style scoped>

</style>
