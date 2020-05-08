<template>
  <div id="app">
    <div class="mask"></div>
    <default-header></default-header>
    <div class="main">
      <div class="wrap">
        <div class="content">
          <nuxt />
        </div>
        <default-sidebar></default-sidebar>
      </div>
    </div>
    <default-footer></default-footer>
  </div>
</template>

<script>
  import defaultHeader from "~/components/defaultHeader"
  import defaultFooter from "~/components/defaultFooter"
  import defaultSidebar from "~/components/defaultSidebar";
  export default {
    name:"default",
    components:{
      defaultHeader,
      defaultFooter,
      defaultSidebar
    },
  }
</script>

<style>

</style>
