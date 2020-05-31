<template>
  <div class="comments-wrap">
    <div v-if="status === 'closed'" class="comment-closed">评论已关闭</div>
    <div v-else-if="status === 'open'" class="commeng-form">
      <h3 class="comment-title">发表评论</h3>
      <p class="comment-sub-title">
        电子邮件地址不会被公开。 必填项已用
        <i class="c-red">*</i>标注
      </p>
      <div class="comment-other">
        <ul class="list-wrap">
          <li class="list" @click="showChartlet">上传图片</li>
          <li class="list" @click.stop="getExpression">表情</li>
        </ul>
      </div>
      <div class="comment-form-content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item  prop="content">
            <el-input type="textarea" :autosize="{ minRows: 5}" v-model="ruleForm.content" placeholder="评论内容"></el-input>
          </el-form-item>
          <el-form-item  prop="name" class="name">
            <el-input v-model="ruleForm.name" placeholder="昵称"></el-input>
          </el-form-item>
          <el-form-item  prop="email" class="email">
            <el-input v-model="ruleForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item  prop="website" class="website">
            <el-input v-model="ruleForm.website" placeholder="网址"></el-input>
          </el-form-item>
          <el-form-item  prop="code" class="code">
            <el-input v-model="ruleForm.code" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">发表评论</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--评论列表-->
    <ul class="comment-list-wrap">
      <li class="comment-list" v-for="(item) in commentList" :key="item.key">
        <template>
          <p
            v-if="info.isOpenTextThumbnail"
            class="list-gravatar-text"
            :style="{ background: item.userAgentInfo.background }">
            {{ item.author_name.substr(0, 1) }}
          </p>
          <img
            v-else
            :src="item.userAgentInfo.author_avatar_urls"
            class="list-gravatar"
            width="60"
            height="60"
            alt="">
        </template>
        <div class="list-header">
          <a :name="`comment-${item.id}`"></a>
          <a :href="item.author_url" target="_blank" class="author">{{ item.author_name }}</a>
          <!-- 评论者等级 -->
          <span
            class="icon-vip icon-level"
            :class="[item.userAgentInfo.vipStyle.style, item.userAgentInfo.vipStyle.level]"
            :title="item.userAgentInfo.vipStyle.title">
          </span>
          <img v-if="item.userAgentInfo.vipStyle.title === '博主'" src="../../assets/images/icon-admin.png" width="20" class="icon-admin">
          <p class="inline-block system-wrap">
            <!-- 浏览器logo -->
            <span :class="['browser-info', item.userAgent.browserEnName && item.userAgent.browserEnName.toLowerCase()]">
              {{ item.userAgent.browserName }} {{ item.userAgent.browserVersion }}
            </span>
            <!-- 系统logo -->
            <span class="system-info">{{ item.userAgent.systemName }} {{ item.userAgent.systemVersion }}</span>
          </p>
          <span v-if="item.status === 'hold'">您的评论正在审核中...</span>
        </div>
        <div class="list-content">
          {{item.content.rendered}}
        </div>
        <div class="list-footer">
          <time>{{ item.date.replace('T', ' ') }}</time>
          <div class="opinion">
            <span class="opinion-btn" @click="_updateCommentOpinion(item.id, 'good', index)">
              <i class="el-icon-check"></i> {{ item.meta.opinion.good }}
            </span>
            <span class="opinion-btn" @click="_updateCommentOpinion(item.id, 'bad', index)">
              <i class="el-icon-close"></i> {{ item.meta.opinion.bad }}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <!--评论列表结束-->
    <div class="more-btn" @click="bClick && _getMoreList()">
      <span><i v-show="bMoreList" class="iconfont icon-loading"></i>{{ sMoreBtnText }}</span>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  name: "comment",
  components,
  props: {
    status: {
      type: String,
      default: "open"
    }
  },
  data() {
    return {
      ruleForm:{
        content:"",
        name:"",
        email:"",
        website:"",
        code:""
      },
      rules:{
        content:[
            { required: true, message: '内容不能为空！', trigger: 'blur' }
        ],
        name:[
            { required: true, message: '昵称不能为空！', trigger: 'blur' }
        ],
        email:[
            { required: true, message: '邮箱不能为空！', trigger: 'blur' }
        ],
        code:[
            { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      },
      currentCommentPage: 1,
      bClick: true,
      bMoreList: true,
      bSubmit: true,
      showChart: false,
      sMoreBtnText: '评论加载中',
      submitText: '提交评论'
    };
  },
  computed:{
    ...mapState(['info']),
    ...mapState({
      isOpenCommentUpload: state => state.info.isOpenCommentUpload,
      templeteUrl: state => state.info.templeteUrl
    }),
    ...mapState('comment', ['commentList', 'totalPage'])
  },
  methods: {
    showChartlet() {},
    getExpression() {
      console.log(111);
    }
  }
};
</script>

<style scoped lang="less">
</style>