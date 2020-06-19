<template>
  <div id="league">
    <div class="container">
      <LeagueSelectionComponent />
      <div id="league-nav">

      </div>
      <LeagueNavbarComponent v-if="getSelectedLeagueId != 0" />
      <LeagueTableComponent v-if="getSelectedLeagueViewMode === 'leagueTable'" />
      <LeagueFixtureComponent v-if="getSelectedLeagueViewMode === 'matchesFixture'" />
      <LeagueMatchesFinishedComponent v-if="getSelectedLeagueViewMode === 'matchesFinished'" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LeagueSelectionComponent from '../components/LeagueStats/LeagueSelection.component.vue';
import LeagueTableComponent from '../components/LeagueStats/LeagueTable.component.vue';
import LeagueNavbarComponent from '../components/LeagueStats/LeagueNavbar.component.vue';
import LeagueFixtureComponent from '../components/LeagueStats/LeagueFixture.component.vue';
import LeagueMatchesFinishedComponent from '../components/LeagueStats/LeagueMatchesFinished.component.vue';

export default {
  components: {
    LeagueSelectionComponent,
    LeagueTableComponent,
    LeagueNavbarComponent,
    LeagueFixtureComponent,
    LeagueMatchesFinishedComponent,
  },

  created() {
    this.getAllLeagues();
  },

  methods: {
    ...mapActions(['getAllLeagues']),
  },

  computed: {
    ...mapGetters(['getSelectedLeagueId', 'getSelectedLeagueViewMode']),
  },
};
</script>

<style lang="scss" scoped>
.container{
  background-color:  rgb(240, 239, 239);
  margin: auto;
  min-height: 800px;
}

#league-nav{
  min-width: 60px;
  background: lightseagreen;
}
</style>
