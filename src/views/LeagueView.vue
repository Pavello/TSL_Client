<template>
  <div id="league">
    <div class="container">
      <LeagueSelectionComponent />
      <div id="league-nav">

      </div>
      <LeagueTableComponent v-if="getSelectedLeagueId != 0" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LeagueSelectionComponent from '../components/LeagueStats/LeagueSelection.component.vue';
import LeagueTableComponent from '../components/LeagueStats/LeagueTable.component.vue';

export default {
  name: 'welcomingComponent',

  components: {
    LeagueSelectionComponent,
    LeagueTableComponent,
  },

  created() {
    this.getAllLeagues();
  },

  methods: {
    ...mapActions(['getAllLeagues']),
  },

  computed: {
    ...mapGetters(['getSelectedLeagueId']),
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
