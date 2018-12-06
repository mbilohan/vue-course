import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color'
import List from './list'

import Form from './Form.vue'

export const eventEmitter = new Vue();

Vue.directive('colored', ColorDirective);

Vue.filter('uppercase', (value) => value.toUpperCase());

Vue.component('app-list', List);

Vue.mixin({
  beforeCreate() {
    console.log('Before created');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#form',
  render: h => h(Form)
});
