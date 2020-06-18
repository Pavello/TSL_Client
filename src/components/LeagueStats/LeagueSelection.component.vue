<template>
  <div id="league">
    <div class="container">
      <button v-for="league in getActiveLeagues"
      :key="league.id"
      @click="selectAndGetLeagueStats(league.id)">
        Liga {{league.leagueCategory}} {{league.year}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['selectLeague', 'getLeagueStatsById']),

    selectAndGetLeagueStats(leagueId) {
      this.selectLeague(leagueId);
      this.getLeagueStatsById();
    },
  },
  computed: {
    ...mapGetters([
      'getActiveLeagues',
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
          font-size: 30px;
          border-radius: 10px;
          margin: 15px 12px 15px 12px;
          padding: 10px 7px;
          box-shadow: 4px 4px 6px rgba(2, 2, 2, 0.28);
      }
    }
</style>
