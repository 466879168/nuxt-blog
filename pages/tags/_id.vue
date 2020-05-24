<template>
  <div class="container">
    <ul class="header">
      <li class="list">
        当前标签:{{$route.query.title}}
      </li>
    </ul>
    <article class="article-list" v-for="item in articleList" :key="item.key">
      <div class="list-content">
        <h2 class="title">
          <span class="classify">
            {{item.articleInfor.classify[0].name}}
          </span>
          <nuxt-link :to="{ name: 'details-id', params: { id: item.id } }" class="vertical-middle">
            {{item.title.rendered}}
          </nuxt-link>
        </h2>
        <p class="summary">
          {{ item.articleInfor.summary }}
        </p>
        <div class="opeartion">
          <div class="information">
            <span>
              {{ item.date|dateTFormat }}
            </span>
            <span>
              {{ item.articleInfor.viewCount }}
            </span>
            <span>
              {{ item.articleInfor.commentCount }}
            </span>
            <!--<span>
              {{ item.articleInfor.xmLike.very_good }}
            </span>-->
            <nuxt-link class="details-btn" :to="{name:'details-id',params:{id:item.id}}">
            阅读详情
          </nuxt-link>
          </div> 
        </div>
      </div>
    </article>
    <el-pagination
      :page-size="10"
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="changePagination"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "tags",
    watchQuery:['type'],
    fetch({store,query,params}){
      store.commit('article/setCurrentPage',+params.id)
      return store.dispatch("article/getArticleList",{
        tags: query.type,
        page: params.id,
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
        title:this.$route.query.title
      }
    },
    methods:{
      changePagination(id){
        this.$store.commit('article/setCurrentPage',id)
        this.$router.push({
          name:'tags-id',
          params:{id},
          query:{
            type:this.$route.query.type,
            title:this.$route.query.title
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .container /deep/ .el-pagination{
    text-align: center;
  }
  .container{
    padding: @container-padding;
    background: @color-white;
    border-radius: @border-radius;
    .header{
      padding-bottom: @container-padding;
      border-bottom: 1px solid @color-main-background;
      font-size: @font-size-large;
    }
  }

  @media screen and (max-width:767px) {
    .container {
      .article-list {
        flex-wrap: wrap;
        height: auto;

        .title {
          margin-top: 15px;
          font-size: @font-size-large;
        }

        .summary {
          height: auto;
        }

        .list-content {
          height: auto;
        }

        .opeartion {
          position: static;
          display: block;
          margin-top: 10px;
        }

        .details-btn {
          display: block;
          margin-top: 10px;
          padding: 10px 0;
          text-align: center;
        }
      }
    }

    /deep/ .el-pagination {
      .el-pagination__jump {
        display: none;
      }
    }
  }
</style>
