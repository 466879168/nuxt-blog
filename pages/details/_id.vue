<template>
  <div class="container">
    <!--文章内容开始-->
    <article class="section article">
      <h2 class="title">
        {{ detail.title.rendered }}
      </h2>
      <div class="other-info">
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
    console.log(this.info);
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
</style>
