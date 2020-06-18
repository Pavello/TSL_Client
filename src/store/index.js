import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/postModule';
import leagues from './modules/leagueModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    leagues,
  },
});
