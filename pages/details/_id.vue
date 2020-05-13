<template>
  <div class="container">
    <article class="section article">
      <h2 class="title">
        {{detail.articleInfor.author}}
      </h2>
      <div class="other-info">
        
      </div>
    </article>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name: "details",
    fetch(){

    },
    components:{

    },
    data(){
      return {

      }
    },
    computed:{
      ...mapState(["info"]),
      ...mapState("article",["detail","viewCount","opinion"])
    }
  }
</script>

<style scoped lang="less">
.section{
  margin-top: @container-margin;
  padding: @container-padding;
  background: @color-white;
  border-radius: @border-radius;
}
</style>
