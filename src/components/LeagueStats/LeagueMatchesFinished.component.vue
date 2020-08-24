<template>
<div id="container">
  <table>
      <tbody v-for="(match, matchIndex) in getFinishedMatchesFromLeague" :key="matchIndex">
      <tr class="fixture">
          <td rowspan="2" class="date">Data</td>
          <td class="first-player">
          {{match.matchPlayerData[0].player.firstName}}
          {{match.matchPlayerData[0].player.lastName}}
          </td>
          <td class="set-score" v-for="(setScore, setScoreIndex) in match.matchPlayerData[0].setScores" :key="setScoreIndex">
            {{setScore.games}}
          </td>
      <tr>
          <td class="second-player">
          {{match.matchPlayerData[1].player.firstName}}
          {{match.matchPlayerData[1].player.lastName}}
          </td>
          <td class="set-score" v-for="(setScore, setScoreIndex) in match.matchPlayerData[1].setScores" :key="setScoreIndex">
            {{setScore.games}}
          </td>
      </tr>
      </tbody>
</table>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getFinishedMatchesFromLeague']),
  },
};
</script>

<style lang="scss" scoped>
#container{
  margin: auto;
  width: 700px;
}
table{
  margin: auto;
  empty-cells: show;
  width:100%
}
tbody{
  margin: 30px auto;
    th{
      background-color: lightslategrey;
      text-align: center;
      width: 100%;
      padding: 10px 0px;
    }
    td{
      margin: 10px 1em;
      padding: 0.5em 0.8em;
      text-align: center;
      vertical-align: middle;
      border: 1px solid rgb(167, 167, 167);
    }

    tbody::before
    {
    content: '';
    display: block;
    height: 15px;
    }

    p{
      margin: 0;
      padding: 0;
    }

    .first-player {
      width: 200px
    }

    .second-player{
      width: 200px
    }

    .date{
      width: 50px
    }

    .set-score{
      width: 20px;
    }
  }
</style>
