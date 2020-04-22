<template>
  <div>
    <blogHeader />
    <nuxt />
  </div>
</template>

<script>
import blogHeader from '~/components/blogHeader.vue'

export default {
  name:"App",
  components: {
    blogHeader
  },
  async asyncData(){
    await store.dispatch()
  }
}
</script>

<style>

</style>
