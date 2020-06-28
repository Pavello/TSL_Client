import axios from 'axios';
import * as _ from 'lodash';
import * as moment from 'moment';

const state = {
  leagues: [],
  selectedLeagueId: 0,
  selectedLeagueStats: [],
  selectedLeagueViewMode: '',
  matchesFixtures: [],
};

const getters = {
  getAllLeagues: (state) => state.leagues,
  getActiveLeagues: (state) => state.leagues.filter((league) => league.archivated === false),
  getSelectedLeagueId: (state) => state.selectedLeagueId,
  getLeagueStats: (state) => state.selectedLeagueStats,
  // eslint-disable-next-line max-len
  getLeagueStatsSortedByPoints: (state) => state.selectedLeagueStats.sort((a, b) => b.playerLeaguePoints - a.playerLeaguePoints),
  getSelectedLeagueViewMode: (state) => state.selectedLeagueViewMode,
  getMatchesFixturesFromState: (state) => state.matchesFixtures,
  getMatchesFixturesGroups: (state) => _.keys(state.matchesFixtures).map((m) => moment(m)).map((m) => m.locale('pl')).map((m) => m.format('LLLL')),
};

const actions = {

  async getAllLeagues({ commit }) {
    const response = await axios.get('api/league');
    console.log(response);
    commit('setLeagues', response.data);
  },

  async selectLeague(context, selectedLeague) {
    console.log(selectedLeague);
    context.commit('selectLeagueMut', selectedLeague);
  },

  async selectLeagueViewMode(context, selectedLeagueViewMode) {
    console.log(selectedLeagueViewMode);
    context.commit('selectLeagueViewModeMut', selectedLeagueViewMode);
  },

  async getLeagueStatsById({ commit }) {
    const response = await axios.get(`api/league/${state.selectedLeagueId}?playerStats`);
    console.log(response);

    commit('setSelectedLeagueStats', response.data.playerLeagueStats);
  },

  async getMatchesFixturesFromApi({ commit }) {
    const response = await axios.get(`api/match/weekFixtures/${state.selectedLeagueId}`);
    console.log(response);

    commit('setFixtureMatches', response.data);
  },

};

const mutations = {
  setLeagues(state, leagues) {
    state.leagues = leagues;
  },

  selectLeagueMut(state, selectedLeagueId) {
    state.selectedLeagueId = selectedLeagueId;
  },

  selectLeagueViewModeMut(state, selectedLeagueViewMode) {
    state.selectedLeagueViewMode = selectedLeagueViewMode;
  },

  setSelectedLeagueStats(state, setSelectedLeagueStats) {
    state.selectedLeagueStats = setSelectedLeagueStats;
  },

  setFixtureMatches(state, matchesFixturesToSet) {
    state.matchesFixtures = matchesFixturesToSet;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
