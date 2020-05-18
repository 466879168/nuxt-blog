<template>
  <div class="container">
    <article class="article">
      <h2 class="title">
        <span class="">
          {{detail.title.rendered}}
        </span>
      </h2>
      <div class="content-details">
        {{detail.content.rendered}}
      </div>
    </article>
    <div class="comment">
      <h2 class="cmment-title">
        {{`共 ${detail.pageInfor.commentCount} 条评论关于 “${detail.title.rendered}”`}}
      </h2>
      <client-only>
          
      </client-only> 
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
  export default {
    name: "page",
    layout:'page',
    fetch({params,store}){
      return stpre.dispatch("page/getPageDetail",params.id)
    },
    computed:{
      ...mapState(['info']),
      ...mapState('page',['detail'])
    },
    head(){
      return {
        title:`${this.detail.title.rendered}|${this.info.blogName}`
      }
    }
  }
</script>

<style scoped>

</style>
