import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCalendarAlt,
  faCalendarCheck,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faSpinner, faCalendarCheck, faCalendarAlt, faTrophy);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
