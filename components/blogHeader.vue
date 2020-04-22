<template>
  <div class="header-container">
    <div class="hide-header"></div>
    <div class="header-content" ref="header">
      <div class="wrap h-f-100">
        <!--logo-->
        <div class="logo">
          <h1>{{info.blogName}}</h1>
          <nuxt-link :to="{name:'index'}" class="block">
            <img :src="info.logo" class="vertical-middle" width="130" height="40" alt="">
          </nuxt-link>
        </div>
        <!--logo-->
        <div class="nav-wrapper">
          <ul class="nav-view h-f-100">
            <li class="nav-item h-f-100" v-for="item in menu" :key="item.key">
                {{item.title}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:"blogHeader",
  data(){
    return {

    }
  },
  computed:{
    ...mapState(["info","menu","menuStatus"])
  }
}
</script>>

<style lang="scss" scoped>
.header-container{
  position: relative;
  width: 100%;
  background: #fff;
}
</style>
