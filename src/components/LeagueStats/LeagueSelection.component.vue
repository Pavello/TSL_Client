<template>
  <div id="league">
    <div class="container">
      <button v-for="league in getActiveLeagues"
      :key="league.id"
      :style=" (getSelectedLeagueId == league.id) ? { 'background-color': '#4aab52' } : null"
      @click="selectAndGetLeagueStats(league.id)">
      <span v-if="league.halfSeason === 'summer'">Lato</span>
      <span v-if="league.halfSeason === 'winter'">Zima</span>
        {{league.year}} <br>
        Liga {{league.leagueCategory}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['selectLeague', 'getLeagueStatsById', 'getMatchesFixturesFromApi', 'selectLeagueViewMode']),

    selectAndGetLeagueStats(leagueId) {
      this.selectLeague(leagueId);
      this.getLeagueStatsById();
      this.getMatchesFixturesFromApi();
      if (this.getSelectedLeagueViewMode === '') {
        this.selectLeagueViewMode('leagueTable');
      }
    },
  },
  computed: {
    ...mapGetters([
      'getActiveLeagues',
      'getSelectedLeagueId',
      'getSelectedLeagueViewMode',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .container{
      margin: auto;
      text-align: center;
      max-width: 1100px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      border-bottom: 0.2px solid black;
        button {
          background-color: #008CBA;
          border: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          border-radius: 10px;
          margin: 15px 12px 15px 12px;
          padding: 10px 7px;
          box-shadow: 4px 4px 6px rgba(2, 2, 2, 0.28);
      }
    }
</style>
