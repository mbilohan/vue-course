<template>
    <div>
        <h3>Counter: {{ counter }}</h3>
        <h2>Counter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, similique.</p>
    </div>
</template>

<script>
    import {eventEmitter} from './main';

    export default {
      data() {
        return {
          counter: 0
        }
      },
      created() {
        eventEmitter.$on('counterUpdated', (num) => {
          this.counter += num;
        })
      }
    }
</script>

<style scoped>
    h3 { color: darkcyan; }
</style>