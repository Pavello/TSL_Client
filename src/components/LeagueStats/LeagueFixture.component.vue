<template>
<div id="container">
<table class="fixtureGroup" v-for="(group, gIndex) in getMatchesFixturesGroups" :key="gIndex">
      <th colspan="4">{{group}}</th>
          <tr class="fixture" v-for="(match, mIndex) in getMatchesFixturesFromState[gIndex]"
            :key="mIndex">
          <td class="firstPlayer">{{match.matchPlayerData[0].player.firstName}}
          {{match.matchPlayerData[0].player.lastName}}</td>
          <td class="sign">:</td>
          <td class="secondPlayer">{{match.matchPlayerData[1].player.firstName}}
          {{match.matchPlayerData[1].player.lastName}}</td>
          <td class="matchFixture">{{match.fixture}}</td>
        </tr>
</table>
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


    td{
      margin: 10px 1em;
      padding: 0.7em 1em;
      text-align: center;
      vertical-align: middle;
      border: 1px solid rgb(167, 167, 167);
    }

    .fixture:nth-of-type(even){
      background-color: rgb(220, 220, 220);
    }

    .firstPlayer {
      width: 40%;
    }

    .secondPlayer{
      width: 40%;
    }

    .sign {
      width: 10%;
    }

    .matchFixture {
      width: 10%;
    }
  }

</style>
