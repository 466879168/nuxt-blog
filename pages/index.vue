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
          <div class="information">
            <span>
              {{item.date}}
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
            <nuxt-link class="details-btn" :to="{name:'details-id',params:{id:item.id}}">
              阅读详情
            </nuxt-link>
          </div>
        </div>
      </article>
      <!--分页-->
      <div class="footer-content">
        <el-pagination
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
  }
}
</script>

<style lang="less" scoped>
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
      .article-list{
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 145px;
        padding: 20px 0;
        border-bottom: 1ox solid @color-main-background;
        &::after{
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: @color-theme;
          transition: .4s;
        }
        &:hover{
          &:after{
            width: 100%;
          }
        }
        .list-content{
          flex: 1;
          position: relative;
          .title{
            margin-bottom: 10px;
            font-size: 18px;
            a{
              color: #333;
              &:hover{
                color: @color-theme;
              }
            }
            .classify{
              position: relative;
              margin-right: 10px;
              padding: 3px 5px;
              background: @color-theme;
              border-radius: 3px;
              font-size: @font-size-small;
              color: @color-white;
              &:after{
                content: "";
                position: absolute;
                right: -10px;
                top: 50%;
                border: 5px solid @color-theme;
                transform: translateY(-50%);
              }
            }
          }
          .summary{
            line-height: 1.8;
          }
        }
      }
    }
  }

</style>
