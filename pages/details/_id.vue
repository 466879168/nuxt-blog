<template>
  <div class="container">
    <!--文章内容开始-->
    <article class="section article">
      <h2 class="title tc">{{ detail.title.rendered }}</h2>
      <div class="other-info tc">
        <p class>
          <span class="author">{{ detail.articleInfor.author }}</span>
          <time>{{ detail.date }}</time>
        </p>
        <p>
          <span class="text m-l-10">分类:</span>
          <span
            style="margin-right: 5px;"
            class="classify"
            v-for="(item, index) in detail.articleInfor.classify"
            :key="index"
          >{{ item.name }}</span>
          <span class="m-l-5">
            <!--            {{ viewCount }}-->
          </span>
          <span class="m-l-5">{{ detail.articleInfor.commentCount }}</span>
        </p>
      </div>
      <div class="content-details" ref="articleContent" v-html="detail.content.rendered"></div>
    </article>
    <div class="section copyright">
      <p class="m-l-10" style="margin-bottom: 10px;">
        <strong>版权声明:</strong>
        本站文章除特别声明外，均为本站原创。转载请注明出处，谢谢。
      </p>
      <p class="m-l-10">
        <strong>本文地址:</strong>
        <a :href="fullPath">www.mengyang.info{{ fullPath }}</a>
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
          <span class="block total tc">{{ item.deta }}人</span>
          <img :src="item.src" alt width="40" height="40" />
          <span class="block">{{ item.text }}</span>
        </li>
      </ul>
      <!--点赞结束-->
      <!--分享开始-->
      <div class="share text-center">
        <span class="text">分享到：</span>
        <a
          class="qq"
          :href="
            `https://connect.qq.com/widget/shareqq/index.html?url=${info.domain}/details/${$route.params.id}&title=${detail.title.rendered}&summary=`
          "
          target="_blank"
        >
          <i class="iconfont icon-qq"></i>
        </a>
        <a
          class="qqkongjian"
          :href="
            `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${info.domain}/details/${$route.params.id}&title=${detail.title.rendered}&summary=${detail.articleInfor.summary}`
          "
          target="_blank"
        >
          <i class="iconfont icon-062qqkongjian"></i>
        </a>
        <a
          class="weibo"
          :href="
            `https://service.weibo.com/share/share.php?url=${info.domain}/details/${$route.params.id}%230-tsina-1-21107-397232819ff9a47a7b7e80a40613cfe1&title=${detail.title.rendered}&appkey=1343713053&searchPic=true#_loginLayer_1473259217614`
          "
          target="_blank"
        >
          <i class="iconfont icon-tubiaozhizuo-"></i>
        </a>
        <a href="javascript:;" class="create-poster-btn" @click="isShowPoster = true">
          <i class="iconfont icon-ico"></i>
        </a>
      </div>
      <!--分享结束-->
      <!--标签开始-->
      <div class="tag-wrap tc">
        <i class="iconfont icon-tag" style="position: relative;top:.5px"></i>
        <span style="margin-right: 5px;" v-for="(item, index) in detail.articleInfor.tags" :key="index">{{ item.name }}</span>
      </div>
      <!--标签结束-->
      <!--上一篇下一篇-->
      <div class="relative-link-wrap">
        <div class="prev">
          <p v-if="detail.articleInfor.prevLink === ''">已经是第一篇文章了！</p>
          <p v-else>
            上一篇：
            <nuxt-link
              :to="{
                name: 'details-id',
                params: { id: detail.articleInfor.prevLink.ID }
              }"
            >{{ detail.articleInfor.prevLink.post_title }}</nuxt-link>
          </p>
        </div>
        <div class="nuxt">
          <p v-if="detail.articleInfor.nextLink === ''">已经是最后一篇文章了！</p>
          <p v-else>
            下一篇：
            <nuxt-link
              :to="{
                name: 'details-id',
                params: { id: detail.articleInfor.nextLink.ID }
              }"
            >{{ detail.articleInfor.nextLink.post_title }}</nuxt-link>
          </p>
        </div>
      </div>
      <!--上一篇下一篇-->
    </div>
    <!--作者信息-->
    <div class="section author-introduct">
      <el-image
        style="width: 100px; height: 100px"
        :src="defaultAvatar"
        fit="cover"
      ></el-image>
      <div class="right">
        <div class="header">
          <p class="inline-block name">
            作者简介：
            <span class="autor">
              <i class="iconfont icon-wo"></i>
              {{ detail.articleInfor.author }}
            </span>
          </p>
          <div v-if="info.isOpenReward" class="reward" @click="isShowReward = true">
            <span>
              <i class="iconfont icon-dashang"></i>
              打赏
            </span>
          </div>
          <reward :isShow="isShowReward" :content="rewardContent" @closeReward="closeReward"></reward>
        </div>
        <p class="author-summary">一日行善，福虽未至，祸自远矣。一日行恶，祸虽未至，福自远矣。行善之人，如春园之草，不见其长，日有所增。做恶之人，如磨刀之石，不见其损，日有所亏。福祸无门总在心，人心不善祸相侵。</p>
        <ul class="author-link">
          <li class="list">
            <nuxt-link :to="{ name: 'index' }">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye1"></use>
              </svg>
            </nuxt-link>
          </li>
          <li class="list github" @click="goToGithub">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github1"></use>
            </svg>
          </li>
          <li class="list" @click="goToqq">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-QQ"></use>
            </svg>
          </li>
          <li class="list" @click="goToWeixin">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin1"></use>
            </svg>
          </li>
          <li class="list" @click="goToWeibo">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo"></use>
            </svg>
          </li>
          <li class="list" @click="goToEmail">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youxiang1"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <!--作者信息-->
    <!--评论列表-->
    <div class="section comment">
      <h2 class="commeng-title tc">
        {{`共 ${detail.articleInfor.commentCount} 条评论关于  ${detail.title.rendered}`}}
      </h2>
      <client-only>
        <comments :status="detail.comment_status"></comments>
      </client-only>
    </div>
    <!--评论列表-->
    <!--生成海报-->
    <client-only placeholder="Loading...">
      <createposter :value="isShowPoster" :content="posterContent" @input="closecreateposter()">
      </createposter>
    </client-only>
    <!--生成海报-->
  </div>
</template>

<script>
import comments from "~/components/comment"
import reward from "~/components/reward"
import createposter from "~/components/createposter";
import { mapState, mapActions } from "vuex";
export default {
  name: "articleDetail",
  fetch({ params, error, store }) {
    // store.dispatch("article/updateArticleViewCount",{id:params.id})
    return store.dispatch("article/getArticleDetail", params.id);
  },
  components: { createposter,reward,comments },
  data() {
    return {
      fullPath: "",
      isShowPoster: false,
      posterContent: {},
      isShowReward: false,
      rewardContent:{},
    };
  },
  created() {
    this.fullPath = `${this.info.domain.replace(/\/$/, "")}${this.$route.path}`;
    // 合并作者数据
    for (let key in this.authorOtherInfo) {
      this.authorOtherInfo[key].url = other[key]
    }
    // 打赏数据
    this.rewardContent = {
      thumbnail: this.detail.articleInfor.other.authorPic,
      text: this.info.rewardText,
      alipay: this.info.alipay,
      wechatpay: this.info.wechatpay
    }
  },
  mounted() {
    //下面这行代码解决prismjs不能异步加载必须刷新一下才显示的问题
    process.browser &&
      document
        .querySelectorAll("pre code")
        .forEach(block => Prism.highlightElement(block));
    // 海报内容
    this.posterContent = {
      imgUrl: this.detail.articleInfor.thumbnail,
      title: this.detail.title.rendered,
      summary: this.detail.articleInfor.summary,
      time: this.detail.date.replace(/\s.*/, " "),
      qrcodeLogo: this.detail.articleInfor.other.authorPic.replace(
        /(https?:\/\/([a-z\d-]\.?)+(:\d+)?)?(\/.*)/gi,
        `${this.info.domain}$4`
      ),
      qrcodeText: this.info.blogName,
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["info"]),
    ...mapState("article", ["detail", "viewCount", "opinion"])
  },
  methods: {
    updateOpinion() {},
    closecreateposter(flag) {
      this.isShowPoster = flag;
    },
    closeReward(flag){
      this.isShowReward=flag
    },
    goToGithub(){
      window.open("https://github.com/466879168")
    },
    goToWeibo(){
      window.open("https://weibo.com/u/5511878287")
    },
    goToEmail(){
      window.open("mailto:466879168@qq.com")
    },
    goToWeixin(){
      this.$message({
        title: `微信号：moxiyansdyk`,
        showClose: true,
        showImg: true,
        center: true,
        wrapCenter: true,
        width: 300,
        imgUrl: "http://image-static.codingdylan.com/img/20200531124303.png",
        duration: 0
      })
    },
    goToqq(){
      this.$message({
        title: `QQ号：466879168`,
        showClose: true,
        showImg: true,
        center: true,
        wrapCenter: true,
        width: 300,
        imgUrl: "http://image-static.codingdylan.com/img/20200531124259.png",
        duration: 0
      })
    }
  }
};
</script>

<style scoped lang="less">
.container{
  padding-top: 20px;
}
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
.copyright{
  a{
    color: #1890ff;
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
      content: "\e604";
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
.share {
  margin-bottom: @container-margin;
  a {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;
    i {
      position: relative;
      font-size: 20px;
      color: #fff;
    }
  }
  .qq {
    background: #68a5e1;
    i {
      top: 3px;
      left: 0px;
    }
  }
  .qqkongjian {
    background: #f5be3f;
    i {
      top: 3px;
      left: 0.5px;
    }
  }
  .weibo {
    background: #f56467;
    i {
      top: 2px;
      left: 1px;
    }
  }
  .create-poster-btn {
    background: #55d081;
    i {
      top: 4px;
      left: 1px;
    }
  }
}
.tag-wrap {
  margin-bottom: @container-margin;
  i {
    font-size: 20px;
    position: relative;
    top: 3px;
  }
}
.relative-link-wrap {
  a {
    color: @color-theme;
  }
}
// 作者信息
.author-introduct {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .right {
    flex: 1;
    margin-left: 10px;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid @color-border;
    .name{
      .autor{
        i{

        }
      }
    }
    .reward{
      span{
        font-size: 16px;
        i{
          font-size: 20px;
          position: relative;
          top: 1px;
        }
      }
    }
  }

  .reward {
    margin-left: 10px;
    cursor: pointer;

    .iconfont-colour {
      vertical-align: bottom;
    }
  }

  .name {
    font-size: @font-size-large;
  }

  img {
    margin-right: 10px;
    border-radius: @border-radius;
  }
}
//个人小图标
.author-link{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  .list{
    cursor: pointer;
    box-sizing: border-box;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: @border-radius;
    background: @color-sub-background;
    .iconfont{
      font-size: 20px;
    }
  }
}
.comment-title{
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: @border-radius;
  background: @color-sub-background;
  font-size: @font-size-large;
}
</style>
