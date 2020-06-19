<template>
   <div id="league-navbar">
    <div id="left-title-section">
    </div>
    <div id="right-icon-section">
      <font-awesome-icon icon="trophy" size="2x" style=" color: white; cursor: pointer"
      @click="setLeagueViewMode('leagueTable')">
      </font-awesome-icon>
      <font-awesome-icon icon="calendar-alt" size="2x" style=" color: white; cursor: pointer"
      @click="setLeagueViewMode('matchesFixture')">
      </font-awesome-icon>
      <font-awesome-icon icon="calendar-check" size="2x" style=" color: white; cursor: pointer"
      @click="setLeagueViewMode('matchesFinished')">
      </font-awesome-icon>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getSelectedLeagueId', 'getLeagueStatsSortedByPoints']),
  },
  methods: {
    ...mapActions(['selectLeagueViewMode', 'getLeagueStatsById']),

    setLeagueViewMode(selectedMode) {
      this.selectLeagueViewMode(selectedMode);
    },
  },
};
</script>


<style lang="scss" scoped>
#league-navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  background-color: steelblue;
  max-width: 1000px;
  margin: 15px auto;
  padding: 10px;

  #right-icon-section{
    display: flex;
    justify-content: space-between;
    min-width: 130px;
  }
}
</style>
