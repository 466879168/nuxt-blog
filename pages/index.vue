<template>
  <div class="container">
    <div class="article-wrap">
      <div class="header">
        <p>最新文章</p>
      </div>
      <!-- <article class="article-list" v-for="item in articleList" :key="item.key">
        <div class="list-content">
          <h2 class="title">
            <span class="">
              {{item.articleInfor.classify[0].name}}
            </span>
            <nuxt-link >
              {{item.title.rendered}}
            </nuxt-link>
          </h2>
        </div>
      </article> -->
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {

  },
  computed:{
    // ...mapState(['info']),
    // ...mapState(['article',['articleList', 'totalPage', 'currentPage']])
    // ...mapState(['info']),
    // ...mapState('article', ['articleList', 'totalPage', 'currentPage'])
  }
}
</script>

<style lang="less" scoped>

</style>
