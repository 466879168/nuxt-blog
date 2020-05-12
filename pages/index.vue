<template>
  <div class="container">
    <div class="article-wrap">
      <div class="header">
        <p>最新文章</p>
      </div>
       <article class="article-list" v-for="item in articleList" :key="item.key">
        <div class="list-content">
          <h2 class="title">
            <span class="">
              {{item.articleInfor.classify[0].name}}
            </span>
            <nuxt-link :to="'1'">
              {{item.title.rendered}}
            </nuxt-link>
          </h2>
        </div>
      </article>
      <!--分页-->
      <div class="footer-content">
        <el-pagination
          layout="total, prev, pager, next"
          :total="total"
          :current-page.sync="currentPage"
          :page-size="10"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:"index",
  async fetch({store}){
    store.commit("article/setCurrentPage",1)
    let result=store.dispatch("article/getArticleList",{
      page:1,
      per_page:10,
      _embed:true
    })
    return result
  },
  data(){
    return {
      currentPage:1,
      total:100
    }
  },
  mounted() {
    console.log(this.articleList)
  },
  computed:{
    ...mapState(['info']),
    ...mapState('article', ['articleList', 'totalPage', 'currentPage'])
  }
}
</script>

<style lang="less" scoped>

</style>
