import axios from 'axios';
import * as _ from 'lodash';
import * as moment from 'moment';

const state = {
  leagues: [],
  selectedLeagueId: 0,
  selectedLeagueStats: [],
  selectedLeagueViewMode: '',
  matchesFixtures: {},
};

const getters = {
  getAllLeagues: (state) => state.leagues,
  getActiveLeagues: (state) => state.leagues.filter((league) => league.archivated === false),
  getSelectedLeagueId: (state) => state.selectedLeagueId,
  getLeagueStats: (state) => state.selectedLeagueStats,
  getSelectedLeagueData: (state) => state.leagues.filter((l) => l.id === state.selectedLeagueId),
  // eslint-disable-next-line max-len
  getLeagueStatsSortedByPoints: (state) => state.selectedLeagueStats.sort((a, b) => b.playerLeaguePoints - a.playerLeaguePoints),
  getSelectedLeagueViewMode: (state) => state.selectedLeagueViewMode,
  getMatchesFixturesFromState: (state) => {
    const fixturesToArray = _.values(state.matchesFixtures);
    for (let i = 0; i < fixturesToArray.length; i += 1) {
      console.log(fixturesToArray.length);
      for (let k = 0; k < fixturesToArray[i].length; k += 1) {
        fixturesToArray[i][k].fixture = (moment(fixturesToArray[i][k].fixture).add(-2, 'hours')).format('HH:mm');
      }
    }
    return fixturesToArray;
  },
  getMatchesFixturesGroups: (state) => _.keys(state.matchesFixtures).map((m) => moment(m)).map((m) => m.locale('pl')).map((m) => m.format('Do MMMM YYYY, dddd')),
};

const actions = {

  async getAllLeagues({ commit }) {
    const response = await axios.get('api/league');
    commit('setLeagues', response.data);
  },

  async selectLeague(context, selectedLeague) {
    context.commit('selectLeagueMut', selectedLeague);
  },

  async selectLeagueViewMode(context, selectedLeagueViewMode) {
    context.commit('selectLeagueViewModeMut', selectedLeagueViewMode);
  },

  async getLeagueStatsById({ commit }) {
    const response = await axios.get(`api/league/${state.selectedLeagueId}?playerStats`);

    commit('setSelectedLeagueStats', response.data.playerLeagueStats);
  },

  async getMatchesFixturesFromApi({ commit }) {
    const response = await axios.get(`api/match/weekFixtures/${state.selectedLeagueId}`);

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
