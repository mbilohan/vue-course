import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'

import App from './App.vue'
import ColorDirective from './color'
import List from './list'

// import Form from './Form.vue'
// import FormValidation from './FormValidation'

import router from './routes'

export const eventEmitter = new Vue();

Vue.directive('colored', ColorDirective);

Vue.filter('uppercase', (value) => value.toUpperCase());

Vue.component('app-list', List);

Vue.use(Vuelidate);
Vue.use(VueRouter);

Vue.mixin({
  beforeCreate() {
    console.log('Before created');
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});

/*
new Vue({
  el: '#form',
  render: h => h(Form)
});


new Vue({
  el: '#form-validation',
  render: h => h(FormValidation)
});
*/
