<template>
  <div class="error-container">
    <h2 class="error-code tc">
      {{error.statusCode}}
    </h2>
    <p class="error-text tc">
      {{error.messgae}}
    </p>
  </div>
</template>

<script>
export default {
name:"error",
props:['error'],
layout:'page',
created(){
  this.$store.commit("updateErrorMessage",{code:this.error.statusCode,message:this.error.message})
},
  beforeDestroy() {
    this.$store.commit("updateErrorMessage",{code:null,message:''})
  }

}
</script>

<style>

</style>
