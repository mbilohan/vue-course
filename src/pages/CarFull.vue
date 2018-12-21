<template>
    <div>
        <h4>Name: {{ $route.query.name }}</h4>
        <h5>Year: {{ year }}</h5>

        <div class="scroll"></div>
        <h6 id="scroll">Hello from the bottom</h6>
    </div>
</template>

<script>
  export default {
    computed: {
      year () {
        return this.$route.query.year
      }
    },
    beforeRouteEnter (to, fromR, next) {
      console.log('beforeRouteEnter');
      next();
    }
  }
</script>

<style scoped>
    .scroll { width: 100px; height: 1000px; background: #fcfcfc; }
</style>