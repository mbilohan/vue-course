<template>
    <div>
        <h1 v-colored:background.font.delay="'orange'" v-if="visible">{{ title }}: {{ carName }}</h1>
        <h1 v-colored:color.delay="'orange'" v-if="visible">{{ title }}: {{ carName }}</h1>
        <button @click="visible = !visible">Toggle visibility</button>
        <button @click="title = 'New title'">Change title</button>

        <h3 v-font>Local font directive</h3>

        <p>{{ description|lowercase }}</p>
        <p>{{ description|uppercase }}</p>
        <p>{{ description|lowercase|uppercase }}</p>

        <app-counter></app-counter>
        <app-car
                v-bind:carName="carName"
                :carYear="carYear"
                :changeFunc="changeNameToAudi"
                @nameChanged="carName = $event"
        >
            <h2 slot="title">Title + html + {{ carMileage }}</h2>
            <p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, dicta ea eaque fugiat fugit odio?</p>
        </app-car>

        <input type="text" v-model="searchName">
        <ul>
            <li v-for="name of filterNames">{{ name }}</li>
        </ul>

        <hr>

        <app-list></app-list>
    </div>
</template>

<script>
  import Car from './Car.vue';
  import Counter from './Counter.vue';
  import ListMixin from './listMixin';

  export default {
    data() {
      return {
        title: 'Parent element',
        carName: 'Ford',
        carYear: 2018,
        carMileage: 19000,
        visible: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, dicta ea eaque fugiat fugit odio?',
      }
    },
    mixins: [ListMixin],
    components: {
      appCar: Car,
      appCounter: Counter
    },
    methods: {
      changeNameToAudi() {
        this.carName = 'Audi';
      }
    },
    directives: {
      font: {
        bind(el, bindings, vnode) {
          el.style.fontSize = '40px';
        }
      }
    },
    filters: {
      lowercase(value) {
        return value.toLowerCase();
      }
    }
  }
</script>

<style scoped>
    h2 { color: chocolate; }
</style>
