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
      <transition name="modal">
      <ModalMatchDecision v-if="getModalDecisionVisiblity"></ModalMatchDecision>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  mapActions, mapGetters,
} from 'vuex';
import LeagueSelectionComponent from '../components/LeagueStats/LeagueSelection.component.vue';
import LeagueTableComponent from '../components/LeagueStats/LeagueTable.component.vue';
import LeagueNavbarComponent from '../components/LeagueStats/LeagueNavbar.component.vue';
import LeagueFixtureComponent from '../components/LeagueStats/MatchFixtures/LeagueFixture.component.vue';
import LeagueMatchesFinishedComponent from '../components/LeagueStats/LeagueMatchesFinished.component.vue';
import ModalMatchDecision from '../components/LeagueStats/MatchFixtures/modalMatchDecision.component.vue';

export default {
  components: {
    LeagueSelectionComponent,
    LeagueTableComponent,
    LeagueNavbarComponent,
    LeagueFixtureComponent,
    LeagueMatchesFinishedComponent,
    ModalMatchDecision,
  },

  created() {
    this.getAllLeagues();
  },

  methods: {
    ...mapActions(['getAllLeagues']),
  },

  computed: {
    ...mapGetters(['getSelectedLeagueId', 'getSelectedLeagueViewMode', 'getModalDecisionVisiblity']),
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

.modal-enter-active, .modal-leave-active {
  transition: opacity .3s; ;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

</style>
