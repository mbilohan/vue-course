<template>
    <div>
        <h2>Form input</h2>
        <input type="text" v-model.lazy="name">
        <p>Current name: {{ name }}</p>

        <textarea v-model="textarea"></textarea>
        <p>Textarea message: {{ textarea }}</p>

        <label>
            <input type="checkbox" value="Instagram" v-model="social"> Instagram
        </label>
        <label>
            <input type="checkbox" value="Twitter" v-model="social"> Twitter
        </label>
        <label>
            <input type="checkbox" value="Facebook" v-model="social"> Facebook
        </label>
        <ul>
            <li v-for="s in social">{{ s }}</li>
        </ul>

        <label>
            <input type="radio" value="Instagram" v-model="social2"> Instagram
        </label>
        <label>
            <input type="radio" value="Twitter" v-model="social2"> Twitter
        </label>
        <label>
            <input type="radio" value="Facebook" v-model="social2"> Facebook
        </label>
        <p>{{ social2 }}</p>

        <select v-model="social3">
            <option v-for="s in socialSelect">{{ s }}</option>
        </select>
        <p> {{ social3 }}</p>

        <input type="text" v-model.number="age">
        <p>{{ age }}</p>

        <app-on-off v-model="switched"></app-on-off>
        <div>
            <h4 v-if="switched">Component is enabled</h4>
            <h4 v-else>Component is disabled</h4>
        </div>
    </div>
</template>

<script>
    import OnOff from './OnOff.vue'

    export default {
      data() {
        return {
          name: 'Initial name',
          textarea: 'I am initial text',
          social: ['facebook'],
          social2: '',
          defaultSocial: 'facebook',
          social3: 'instagram',
          socialSelect: ['instagram', 'twitter', 'facebook'],
          age: 20,
          switched: false
        }
      },
      watch: {
        age(value) {
          console.log(value, typeof value);
        }
      },
      components: {
        appOnOff: OnOff
      }
    }
</script>

<style scoped>
    textarea {
        height: 100px;
        width: 400px;
    }
    p { white-space: pre; }
</style>