import axios from 'axios';

const state = {
  leagues: [],
  selectedLeagueId: 0,
  selectedLeagueStats: [],
};

const getters = {
  getAllLeagues: (state) => state.leagues,
  getActiveLeagues: (state) => state.leagues.filter((league) => league.archivated === false),
  getSelectedLeagueId: (state) => state.selectedLeagueId,
  getLeagueStats: (state) => state.selectedLeagueStats,
  // eslint-disable-next-line max-len
  getLeagueStatsSortedByPoints: (state) => state.selectedLeagueStats.sort((a, b) => b.playerLeaguePoints - a.playerLeaguePoints),
};

const actions = {

  async getAllLeagues({ commit }) {
    const response = await axios.get('api/league');
    console.log(response);
    commit('setLeagues', response.data);
  },

  async selectLeague(context, selectedLeague) {
    console.log(selectedLeague);
    context.commit('selectLeague', selectedLeague);
  },


  async getLeagueStatsById({ commit }) {
    const response = await axios.get(`api/league/${state.selectedLeagueId}?playerStats`);
    console.log(response);

    commit('setSelectedLeagueStats', response.data.playerLeagueStats);
  },
};

const mutations = {
  setLeagues(state, leagues) {
    state.leagues = leagues;
  },

  selectLeague(state, selectedLeagueId) {
    state.selectedLeagueId = selectedLeagueId;
  },

  setSelectedLeagueStats(state, setSelectedLeagueStats) {
    state.selectedLeagueStats = setSelectedLeagueStats;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
