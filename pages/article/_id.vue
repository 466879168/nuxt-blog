<template>
  <div class="container">
    <ul class="header">
      <li class="list">所有文章</li>
    </ul>
    <article class="article-list" v-for="item in articleList" :key="item.key">
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
            <span><i class="iconfont icon-shijian"></i>{{ item.date|dateTFormat }}</span>
            <span><i class="iconfont icon-yueduliang"></i>{{ item.articleInfor.viewCount }}</span>
            <span><i class="iconfont icon-pingjia"></i>{{ item.articleInfor.commentCount }}</span>
            <!-- <span>{{ item.articleInfor.xmLike.very_good }}</span> -->
            <nuxt-link
            class="details-btn"
            :to="{ name: 'details-id', params: { id: item.id } }"
            >阅读详情</nuxt-link
          >
          </div>
        </div>
      </div>
    </article>
    <!-- 分页 -->
    <el-pagination
      :page-size="10"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="changePagination"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Article",
  fetch({ params, store }) {
    store.commit("article/setCurrentPage", +params.id);
    return store.dispatch("article/getArticleList", {
      page: params.id,
      per_page: 10,
      _embed: true
    });
  },
  computed: {
    ...mapState(["info"]),
    ...mapState("article", ["articleList", "total", "currentPage"])
  },
  methods: {
    changePagination(id) {
      this.$store.commit("article/setCurrentPage", id);
      this.$router.push({
        name: "article-id-title",
        params: { id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
  background: @color-white;
  border-radius: @border-radius;

  .header {
    padding-bottom: @container-padding;
    border-bottom: 1px solid @color-main-background;
    font-size: @font-size-large;
  }
  .el-pagination{
    text-align: center;
    margin-top: 20px;
  }
  .article-list{
    .list-content{
      .opeartion{
        .information{
          span{
            margin-left: 10px;
            i{
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
