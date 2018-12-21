<template>
    <div class="container">
        <form class="mt-3" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" :class="{'is-invalid': $v.email.$error}" v-model="email" @blur="$v.email.$touch()">
                <div class="invalid-feedback" v-if="!$v.email.required">Email is required</div>
                <div class="invalid-feedback" v-if="!$v.email.email">Email is invalid</div>
                <div class="invalid-feedback" v-if="!$v.email.uniqueEmail">This email already exists</div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" :class="{'is-invalid': $v.password.$error}" v-model="password" @blur="$v.password.$touch()">
                <div class="invalid-feedback" v-if="!$v.password.minLength">Passwork length should be at least {{ $v.password.$params.minLength.min }} characters. Now it is {{ password.length }}</div>
            </div>
            <div class="form-group">
                <label for="confirm-password">Repeat Password</label>
                <input type="password" id="confirm-password" class="form-control" :class="{'is-invalid': $v.confirmPassword.$error}" v-model="confirmPassword" @blur="$v.confirmPassword.$touch()">
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Passwords should match</div>
            </div>
            <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Submit</button>
        </form>

        <ul>
            <router-link tag="li" v-for="item in 5" :to="'/number/' + item" :key="item">
                <a>Number {{ item }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

    export default {
      data() {
        return {
          email: '',
          password: '',
          confirmPassword: ''
        }
      },
      methods: {
        onSubmit() {
          console.log('Email', this.email);
          console.log('Password', this.password);
        }
      },
      validations: {
        email: {
          required: required,
          email: email,
          uniqueEmail: function(newEmail) {
            if(newEmail === '') return true;

            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const value = newEmail !== 'test@test.com';
                resolve(value);
              }, 3000);
            });
          }
        },
        password: {
          minLength: minLength(6)
        },
        confirmPassword: {
          // sameAs: sameAs('password')
          sameAs: sameAs((vue) => {
            return vue.password
          })
        }
      }
    }
</script>