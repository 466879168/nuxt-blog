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

}

}
</script>

<style>

</style>