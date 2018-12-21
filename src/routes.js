import VueRouter from 'vue-router'

import Form from './pages/Form'
// import FormValidation from './pages/FormValidation'
import Number from './pages/Number'
import CarFull from './pages/CarFull'
import ErrorCmp from './pages/Error'


const FormValidation = resolve => {
  require.ensure(['./pages/FormValidation'], () => {
    resolve(
      require('./pages/FormValidation')
    )
  })
};

export default new VueRouter ({
  routes: [
    {
      path: '/form',
      component: Form
    },
    {
      path: '/form-validation',
      component: FormValidation
    },
    {
      path: '/number/:id',
      component: Number,
      name: 'number',
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carfull',
          beforeEnter (to, fromR, next) {
            console.log('beforeEnter');
            if (true) {
              next(true)
            } else {
              next(false);
            }
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'number'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, fromR, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash }
    }

    return {
      x: 0,
      y: 0
    }
  }
})