<template>
  <div class="container">
    <!--文章内容开始-->
    <article class="section article">
      <h2 class="title tc">
        {{ detail.title.rendered }}
      </h2>
      <div class="other-info tc">
        <p class="">
          <span class="author">
            {{ detail.articleInfor.author }}
          </span>
          <time>
            {{ detail.date }}
          </time>
        </p>
        <p>
          <span class="text m-l-10">
            分类:
          </span>
          <span
            class="classify"
            v-for="(item, index) in detail.articleInfor.classify"
            :key="index"
          >
            {{ item.name }}
          </span>
          <span class="m-l-5">
            <!--            {{ viewCount }}-->
          </span>
          <span class="m-l-5">
            {{ detail.articleInfor.commentCount }}
          </span>
        </p>
      </div>
      <div
        class="content-details"
        ref="articleContent"
        v-html="detail.content.rendered"
      ></div>
    </article>
    <div class="section copyright">
      <p class="m-l-10">
        <strong>
          版权声明:
        </strong>
        本站文章除特别声明外，均为本站原创。转载请注明出处，谢谢。
      </p>
      <p class="m-l-10">
        <strong>
          本文地址:
        </strong>
        <a :href="fullPath"> {{ fullPath }} </a>
      </p>
    </div>
    <!--文章内容结束-->

    <div class="section operation">
      <!--点赞开始-->
      <ul class="opinion">
        <li
          class="list"
          v-for="(item, index) in opinion"
          :key="index"
          @click="updateOpinion(index)"
        >
          <span class="block total"> {{ item.deta }}人 </span>
          <img :src="item.src" alt="" width="40" height="40" />
          <span class="block">
            {{ item.text }}
          </span>
        </li>
      </ul>
      <!--点赞结束-->
      <!--分享开始-->
      <div class="share text-center">
        <span class="text">分享到：</span>
        <a
          :href="
            `https://connect.qq.com/widget/shareqq/index.html?url=${info.domain}/details/${$route.params.id}&title=${detail.title.rendered}&summary=`
          "
          target="_blank"
        >
        </a>
        <a
          :href="
            `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${info.domain}/details/${$route.params.id}&title=${detail.title.rendered}&summary=${detail.articleInfor.summary}`
          "
          target="_blank"
        >
        </a>
        <a
          :href="
            `https://service.weibo.com/share/share.php?url=${info.domain}/details/${$route.params.id}%230-tsina-1-21107-397232819ff9a47a7b7e80a40613cfe1&title=${detail.title.rendered}&appkey=1343713053&searchPic=true#_loginLayer_1473259217614`
          "
          target="_blank"
        >
        </a>
        <a
          href="javascript:;"
          class="create-poster-btn"
          @click="isShowPoster = true"
        >
        </a>
      </div>
      <!--分享结束-->
      <!--标签开始-->
      <div class="tag-wrap tc">
        <span v-for="(item, index) in detail.articleInfor.tags" :key="index">
          {{ item.name }}
        </span>
      </div>
      <!--标签结束-->
      <!--上一篇下一篇-->
      <div class="relative-link-wrap">
        <div class="prev">
          <p v-if="detail.articleInfor.prevLink === ''">
            已经是第一篇文章了！
          </p>
          <p v-else>
            上一篇：
            <nuxt-link
              :to="{
                name: 'details-id',
                params: { id: detail.articleInfor.prevLink.ID }
              }"
            >
              {{ detail.articleInfor.prevLink.post_title }}
            </nuxt-link>
          </p>
        </div>
        <div class="nuxt">
          <p v-if="detail.articleInfor.nextLink === ''">
            已经是最后一篇文章了！
          </p>
          <p v-else>
            下一篇：
            <nuxt-link
              :to="{
                name: 'details-id',
                params: { id: detail.articleInfor.nextLink.ID }
              }"
            >
              {{ detail.articleInfor.nextLink.post_title }}
            </nuxt-link>
          </p>
        </div>
      </div>
      <!--上一篇下一篇-->
    </div>
    <!--作者信息-->
    <div class="section author-introduct">
      <img :src="detail.articleInfor.other.authorPic" alt="" class="phone-hide" width="100">
      <div class="right">
        <div class="header">
          <img :src="detail.articleInfor.other.authorPic" alt="" class="phone-show" width="25">
          <p class="inline-block name">
            作者简介：
            <span class="">{{ detail.articleInfor.author }}</span>
          </p>
          <div v-if="info.isOpenReward" class="reward" @click="isShowReward = true">
            <span>打赏</span> 
          </div>
          <reward v-model="isShowReward" :content="rewardContent"></reward>
        </div>
        <p class="author-summary">
          浮生一世
        </p>
        <ul class="author-link">
          <li class="list">
            
          </li>
        </ul>
      </div>
    </div>
    <!--作者信息-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "articleDetail",
  fetch({ params, error, store }) {
    // store.dispatch("article/updateArticleViewCount",{id:params.id})
    return store.dispatch("article/getArticleDetail", params.id);
  },
  components: {},
  data() {
    return {
      fullPath: ""
    };
  },
  created() {
    this.fullPath = `${this.info.domain.replace(/\/$/, "")}${this.$route.path}`;
  },
  mounted() {
    //下面这行代码解决prismjs不能异步加载必须刷新一下才显示的问题
    process.browser &&
      document
        .querySelectorAll("pre code")
        .forEach(block => Prism.highlightElement(block));
  },
  computed: {
    ...mapState(["info"]),
    ...mapState("article", ["detail", "viewCount", "opinion"])
  },
  methods: {
    updateOpinion() {}
  }
};
</script>

<style scoped lang="less">
.section {
  margin-top: @container-margin;
  padding: @container-padding;
  background: @color-white;
  border-radius: @border-radius;
}
.article {
  margin-top: 0;
  .title {
    padding: 10px 0;
    font-size: 20px;
  }
  .other-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid @color-main-background;
    color: @color-sub-text;
  }
}
.content-details {
  line-height: 2;
  word-break: break-all;
  /deep/ a {
    color: @color-theme;
  }
  /deep/ h2 {
    margin-top: 10px;
  }
  /deep/ h1,
  /deep/ h2 {
    font-size: @font-size-large;
  }
  /deep/ h4,
  /deep/ h5,
  /deep/ h6 {
    font-size: @font-size-small;
  }
  /deep/ img {
    height: auto !important;
    box-shadow: 0 0 10px #d2d2d2;
  }
}

/deep/ div.code-toolbar {
  overflow: hidden;
  width: 100%;
  margin: 20px 0;
  padding-top: 30px;
  border-radius: @border-radius;
  pre {
    margin: 0;
    border: 1px solid @color-main-background;
    border-top: 0px;
  }
  code {
    border: 0;
    box-shadow: none;
    background-size: 4em 4em;
    line-height: 2;
  }
  .line-numbers .line-numbers-rows {
    border-color: @color-main-background;
  }
  .toolbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: @color-theme;
    opacity: 1;
    span {
      background: none;
      box-shadow: none;
      border-radius: 0;
      color: @color-white;
    }
  }
  .toolbar-item {
    padding-left: 20px;
    span:hover {
      color: @color-white;
    }
    &::before {
      content: "\e7ae";
      font-family: "iconfont";
      color: @color-white;
    }
  }
}
.opinion {
  display: flex;
  justify-content: center;
  margin-bottom: @container-margin;
  .list {
    width: 50px;
    margin: 0 20px;
    cursor: pointer;
  }
  .total {
    font-size: @font-size-small;
  }
}
.tag-wrap {
  margin-bottom: @container-margin;
}
.relative-link-wrap {
  .nuxt {
    margin-top: 10px;
  }
}
</style>
