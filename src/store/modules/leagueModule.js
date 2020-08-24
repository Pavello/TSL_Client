import axios from 'axios';
import * as moment from 'moment';

const state = {
  leagues: [],
  selectedLeagueId: 0,
  selectedLeagueStats: [],
  selectedLeagueViewMode: '',
  matchesFixtures: [],
  modalDecisionVisiblity: false,
  modalDecisionIndexesDTO: {},
  finishedMatchesFromLeague: [],
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
    const fixturesMap = new Map(state.matchesFixtures);
    const valuesOfFixturesMap = [...fixturesMap.values()];

    for (let i = 0; i < valuesOfFixturesMap.length; i += 1) {
      for (let k = 0; k < valuesOfFixturesMap[i].length; k += 1) {
        valuesOfFixturesMap[i][k].fixture = (moment(valuesOfFixturesMap[i][k].fixture).add(-2, 'hours')).format('HH:mm');
      }
    }
    return valuesOfFixturesMap;
  },

  getMatchesFixturesGroups: (state) => {
    const fixturesMap = new Map(state.matchesFixtures);
    const keysArray = [...fixturesMap.keys()];
    return keysArray.map((m) => moment(m)).map((m) => m.locale('pl')).map((m) => m.format('Do MMMM YYYY, dddd'));
  },

  getModalDecisionVisiblity: (state) => state.modalDecisionVisiblity,
  getmodalDecisionIndexesDTO: (state) => state.modalDecisionIndexesDTO,
  getFinishedMatchesFromLeague: (state) => state.finishedMatchesFromLeague,
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

  async setDataForPlayerDecision(context, indexes) {
    context.commit('setDataForPlayerDecisionMut', indexes);
  },

  async sendPlayerDecision(context, decisionData) {
    await axios.put(`api/match/fixtureDecision/${decisionData.matchId}?playerIndex=${decisionData.playerId}`,
      { decision: decisionData.decision });
  },

  async getFinishedMatchesFromLeague({ commit }) {
    const response = await axios.get(`api/match/finishedMatches/${state.selectedLeagueId}`);

    commit('setFinishedMatchesFromLeague', response.data);
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

  showModal(state) {
    state.modalDecisionVisiblity = true;
  },

  hideModal(state) {
    state.modalDecisionVisiblity = false;
  },

  setDataForPlayerDecisionMut(state, indexes) {
    state.modalDecisionIndexesDTO = { ...indexes };
  },

  setFinishedMatchesFromLeague(state, finishedMatchesFromApi) {
    state.finishedMatchesFromLeague = finishedMatchesFromApi;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
