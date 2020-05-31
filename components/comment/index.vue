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
          <li v-if="isOpenCommentUpload" class="list" @click="showChartlet">上传图片</li>
          <li class="list" @click.stop="getExpression">表情</li>
        </ul>
      </div>
      <div class="comment-form-content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item  prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
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
      }
    };
  },
  methods: {
    showChartlet() {},
    getExpression() {}
  }
};
</script>

<style>
</style>