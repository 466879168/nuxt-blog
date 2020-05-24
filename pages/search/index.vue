<template>
  <div class="container">
    <ul class="header">
      <li class="list">
        共<span class="mark">{{total}}</span>条关于“<span class="mark">{{$route.query.search}}</span>”
      </li>
    </ul>
    <div v-if="articleList.length === 0" class="not tc">
      暂无数据！
    </div>
    <article
      v-else
      class="article-list"
      v-for="item in articleList"
      :key="item.key"
    >
      <div class="list-content">
        <h2 class="title">
          <span class="classify">
            {{ item.articleInfor.classify[0].name }}
          </span>
          <nuxt-link
            :to="{ name: 'details-id', params: { id: item.id } }"
            class="vertical-middle"
          >
            {{ item.title.rendered }}
          </nuxt-link>
        </h2>
        <p class="summary">
          {{ item.articleInfor.summary }}
        </p>
        <div class="opeartion">
          <div class="information">
            <span>{{ item.date |dateTFormat}}</span>
            <span>{{ item.articleInfor.viewCount }}</span>
            <span>{{ item.articleInfor.commentCount }}</span>
            <!-- <span>{{ item.articleInfor.xmLike.very_good }}</span> -->
          </div>
          <nuxt-link
            class="details-btn tc"
            :to="{ name: 'details-id', params: { id: item.id } }"
          >
            阅读详情
          </nuxt-link>
        </div>
      </div>
    </article>
    <el-pagination
      :page-size="10"
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="changePagination"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  name:"search",
  watchQuery:['page','search'],
  fetch({store,query,params}){
    store.commit('article/setCurrentPage',+query.page)
    return store.dispatch('article/getArticleList',{
      search: query.search,
      page: query.page,
      per_page: 10,
      _embed: true
    })
  },
  computed:{
    ...mapState(['info']),
    ...mapState('article',['articleList', 'total', 'currentPage'])
  },
  head(){
    return {
      thtie:`关于“${this.$route.query.search}”的文章|${this.info.blogName}`
    }
  },
  methods:{
    changePagination(id){
      this.$store.commit('article/setCurrentPage',id)
      this.$router.push({
        name:"search",
        query:{
          page:id,
          search:this.$route.query.search
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    padding: @container-padding;
    background: @color-white;
    border-radius: @border-radius;

    .header {
      padding-bottom: @container-padding;
      border-bottom: 1px solid @color-main-background;
      font-size: @font-size-large;

      .mark {
        color: @color-theme;
      }
    }
    .el-pagination{
      text-align: center;
    }
  }
</style>
