<template>
  <div id="app">
    <div class="mask"></div>
    <nav></nav>
    <div class="main">
      <div class="wrap">
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import nav from "~/components/nav"
  export default {
    name:"default",
    components:{
      nav
    },
  }
</script>

<style>

</style>
