<template>
  <div class="container">
    <ul class="header">
      <li class="list">当前频道:{{ $route.query.title }}</li>
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
            <span>{{ item.date }}</span>
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
      v-if="articleList.length !== 0"
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
import { mapState } from "vuex";
export default {
  name: "category",
  watchQuery: ["type"],
  fetch({ store, query, params }) {
    store.commit("article/setCurrentPage", +params.id);
    return store.dispatch("article/getArticleList", {
      categories: query.type,
      page: params.id,
      per_page: 10,
      _embed: true
    });
  },
  head() {
    return {
      title: `${this.$route.query.title}|${this.info.blogName}`
    };
  },
  computed: {
    ...mapState(["info"]),
    ...mapState("article", ["articleList", "total", "currentPage"])
  },
  mounted() {
  },
  methods: {
    changePagination(id) {
      this.$router.push({
        name: "category-id",
        params: { id },
        query: {
          type: this.$route.query.type,
          title: this.$route.query.title
        }
      });
    }
  }
};
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
  }
  .not {
    margin: 15px 0;
    color: @color-theme;
  }
}

@media screen and(max-width:767px) {
  .container {
    .article-list {
      flex-wrap: warp;
      height: auto;
      .title{
        margin-top: 15px;
        font-size: @font-size-large;
      }
      .summary{
        height: auto;
      }
      .list-content{
        height: auto;
      }
      .opeartion{
        position: static;
        display: block;
        margin-top: 10px;
      }
      .details-btn{
        display:block;
        margin-top: 10px;
        padding: 10px 0;
      }
    }

  }
  /deep/ .el-pagination{
    .el-pagination__jump{
      display: none;
      }
  }
}
</style>
