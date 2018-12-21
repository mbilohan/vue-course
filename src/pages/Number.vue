<template>
    <div>
        <h3>ID {{ id }}</h3>
        <button class="btn btn-sm btn-default" @click="goBack">Back</button>
        <hr>
        <router-link class="btn btn-info" tag="button" :to="{name: 'carfull', params: {id: id}, query: {name: 'Ellen', year: 2000}, hash: '#scroll' }">Full info</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        // id: this.$router.currentRoute.params['id']
        id: this.$route.params['id']
      }
    },
    methods: {
      goBack () {
        this.$router.push('/form-validation')
      }
    },
    watch: {
      $route (toR, fromR) {
        this.id = toR.params['id']
      }
    },
    beforeRouteLeave (to, fromR, next) {
      console.log('beforeRouteLeave');
      if (window.confirm('Are you sure you want to leave?')) {
        next()
      } else {
        next(false);
      }
    }
  }
</script>