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
            {{detail.articleInfor.commentCount}}
          </span>
        </p>
      </div>
      <div class="content-details" ref="articleContent" v-html="detail.content.rendered">
      </div>
    </article>
    <div class="section copyright">
      <p>
        <strong>
          版权声明:
        </strong>
        本站文章除特别声明外，均为本站原创。转载请注明出处，谢谢。
      </p>
      <p class="m-l-10">
        <strong>
          本文地址:
        </strong>
        <a :href="fullPath">
          {{ fullPath }}
        </a>
      </p>
    </div>
    <!--文章内容结束-->
    <!--点赞开始-->
    <div class="section operation">
      <ul class="opinion">
        <li
          class="list"
          v-for="(item, index) in opinion"
          :key="index"
          @click="updateOpinion(index)"
        >
          <span class="block total"> {{ item.deta }}人 </span>
          <img :src="item.src" alt="" />
          <span class="block">
            {{ item.text }}
          </span>
        </li>
      </ul>
    </div>
    <!--点赞结束-->
    <!--分享开始-->
    <!-- <div class="share text-center">
      <span class="text">
        <a href="" target="_blank"></a>
        <a href="" target="_blank"></a>
        <a href="" target="_blank"></a>
        <a href="" target="_blank"></a>
        <a href="" target="_blank"></a>
      </span>
    </div> -->
    <!--分享结束-->
    <!--标签开始-->
    <div class="tag-wrap text-center"></div>
    <!--标签结束-->
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
      fullPath:"",
    };
  },
  created(){
    this.fullPath=`${this.info.domain.replace(/\/$/, '')}${this.$route.path}`
  },
  mounted() {
    //下面这行代码解决prismjs不能异步加载必须刷新一下才显示的问题
    process.browser && document.querySelectorAll('pre code').forEach(block => Prism.highlightElement(block))
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
  .article{
    margin-top: 0;
    .title{
      padding: 10px 0;
      font-size: 20px;
    }
    .other-info{
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
  .content-details{
    line-height: 2;
    word-break: break-all;
    /deep/ a{
      color: @color-theme;
    }
    /deep/ h2{
      margin-top: 10px;
    }
    /deep/ h1,
    /deep/ h2{
      font-size: @font-size-large;
    }
    /deep/ h4,
    /deep/ h5,
    /deep/ h6{
      font-size: @font-size-small;
    }
    /deep/ img{
      height: auto!important;
      box-shadow: 0 0 10px #d2d2d2;
    }
  }

  /deep/ div.code-toolbar{
    overflow: hidden;
    width: 100%;
    margin: 20px 0;
    padding-top: 30px;
    border-radius: @border-radius;
    pre{
      margin: 0;
      border: 1px solid @color-main-background;
      border-top:0px ;
    }
    code{
      border: 0;
      box-shadow: none;
      background-size: 4em 4em;
      line-height: 2;
    }
    .line-numbers .line-numbers-rows {
      border-color: @color-main-background;
    }
    .toolbar{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background: @color-theme;
      opacity: 1;
      span{
        background: none;
        box-shadow: none;
        border-radius: 0;
        color: @color-white;
      }
    }
    .toolbar-item{
      padding-left: 20px;
      span:hover{
        color: @color-white;
      }
      &::before{
        content: "\e7ae";
        font-family: "iconfont";
        color: @color-white;
      }
    }
  }
</style>
