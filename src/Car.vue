<template>
    <div>
        <h3>Name: {{ carName }} / {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc">Change name from parent</button>
        <button @click="updateCounter">Update counter</button>

        <h2>Car</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, similique.</p>

        <slot name="title"></slot>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
import {eventEmitter} from './main.js';

  export default {
    // props: ['carName', 'carYear'],
    props: {
      carName: {
        type: String,
        default: 'Default name'
      },
      carYear: Number,
      changeFunc: Function,
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('');
      }
    },
    methods: {
      changeName() {
        this.carName = 'Mazda';
        this.$emit('nameChanged', this.carName);
      },
      updateCounter() {
        // this.$emit('counterUpdated', this.counter + 1);
        eventEmitter.$emit('counterUpdated', 3);
      }
    }
  }

</script>

<!--
<style>
    div { border: 1px solid #cecece; padding: 5px; margin: 5px; }
</style>-->
