<template>
  <div id="container">
    <div id="fixtureGroup" v-for="(group, gIndex) in getMatchesFixturesGroups" :key="gIndex">
      {{group}}
      <div id="fixture" v-for="(match, mIndex) in getMatchesFixturesFromState[gIndex]"
      :key="mIndex">
          {{match.fixture}}
          <div id="player" v-for="(matchPlayerData, mpdIndex) in match.matchPlayerData"
          :key="mpdIndex">
            {{matchPlayerData.player.firstName}} {{matchPlayerData.player.lastName}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getMatchesFixturesFromState',
      'getMatchesFixturesGroups',
    ]),
  },
};
</script>

<style lang="scss">
#container{
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #fixtureGroup {
    margin: 15px 0px;
  }
}
</style>
