<template>
<div id="container">
<table class="fixtureGroup" v-for="(group, gIndex) in getMatchesFixturesGroups" :key="gIndex">
      <th colspan="4">{{group}}</th>
          <MatchComponent
          v-for="(match, mIndex) in getMatchesFixturesFromState[gIndex]"
          :key="mIndex"
          v-bind:groupIndex='gIndex'
          v-bind:matchIndex='mIndex'
          v-bind:match="match">
          </MatchComponent>
</table>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import MatchComponent from './MatchData.component.vue';


export default {
  components: {
    MatchComponent,
  },
  computed: {
    ...mapGetters([
      'getMatchesFixturesFromState',
      'getMatchesFixturesGroups',
    ]),
  },
};
</script>

<style lang="scss" scoped>
#container {
  margin: 10px auto;
  overflow: hidden;
  max-width: 800px;
  height: 100%;

}

table{
  margin: 30px auto;
  overflow: hidden;
  text-align: center;
  width: 100%;

    th{
      background-color: lightslategrey;
      text-align: center;
      width: 100%;
      padding: 10px 0px;
    }


    .fixture:nth-of-type(even){
      background-color: rgb(220, 220, 220);
    }

  }

</style>
