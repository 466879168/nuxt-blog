<template>
  <div class="container">
    <div class="article-wrap">
      <div class="header">
        <p>最新文章</p>
      </div>
       <article class="article-list" v-for="item in articleList" :key="item.key">
        <div class="list-content">
          <h2 class="title">
            <span class="classify">
              {{item.articleInfor.classify[0].name}}
            </span>
            <nuxt-link  class="vertical-middle" :to="{name:'details-id',params:{id:item.id}}">
              {{item.title.rendered}}
            </nuxt-link>
          </h2>
          <p class="summary">
            {{item.articleInfor.summary}}
          </p>
          <div class="information clearfix">
            <span>
              {{item.date|dateTFormat}}
            </span>
            <span>
              {{item.articleInfor.viewCount}}
            </span>
            <span>
              {{ item.articleInfor.commentCount }}
            </span>
<!--            <span>-->
<!--              {{ item.articleInfor.xmLike.very_good }}-->
<!--            </span>-->
            <nuxt-link class="details-btn tc" :to="{name:'details-id',params:{id:item.id}}">
              阅读详情
            </nuxt-link>
          </div>
        </div>
      </article>
      <!--分页-->
      <div class="footer-content">
        <el-pagination
          background
          @current-change="changePagination"
          layout="prev, pager, next"
          :total="total"
          :current-page="currentPage"
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
  head(){
    return {
      title:`${this.info.blogName} | ${this.info.blogDescription}`
    }
  },
  data(){
    return {
    }
  },
  watch:{
  },
  mounted() {
  },
  computed:{
    ...mapState(['info']),
    ...mapState('article', ['articleList', 'total', 'currentPage'])
  },
  methods:{
    changePagination(id){
      this.$router.push({
        name:"article-id-title",
        params:{id}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container /deep/ .el-pagination{
  text-align: center;
}
  .container{
    .article-wrap{
      margin-top:@container-margin;
      padding:@container-padding;
      border-radius: @border-radius;
      background: @color-white;
      .header{
        padding-bottom:@container-padding;
        border-bottom: 1px solid @color-main-background;
        font-size: @font-size-large;
      }
      .footer-content{
        margin-top: 10px;
      }
    }
  }

</style>
