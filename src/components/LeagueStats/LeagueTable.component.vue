<template>
<div id="container">
  <div id="league-navbar">
    <div id="left-title-section"></div>
    <div id="right-icon-section">
      <font-awesome-icon icon="trophy" size="2x" style=" color: white; "/>
      <font-awesome-icon icon="calendar-alt" size="2x" style=" color: white; "/>
      <font-awesome-icon icon="calendar-check" size="2x" style=" color: white; "/>
    </div>
  </div>
  <div id="league-table-container">
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Gracz</th>
          <th>Mecze rozegrane</th>
          <th>Sety wygrane</th>
          <th>Sety przegrane</th>
          <th>Punkty</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(playerStats, i) in getLeagueStatsSortedByPoints"
        :key="playerStats.id"
        >
          <td>{{i+1}}</td>
          <td>{{playerStats.player.firstName}} {{playerStats.player.lastName}}</td>
          <td>{{playerStats.playerLeagueMatchesPlayed}}</td>
          <td>{{playerStats.playerLeagueSetsWon}}</td>
          <td>{{playerStats.playerLeagueSetsLost}}</td>
          <td>{{playerStats.playerLeaguePoints}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getSelectedLeagueId', 'getLeagueStatsSortedByPoints']),
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

#league-table-container{
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}


table {
  border-collapse: collapse;
  padding: 12px;
  margin: 15px 0px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    thead {
      text-align: left;
      background-color: lightslategrey;
      border-radius: 5px 5px 0 0;

        th{
          padding: 12px;
        }
    }

    tbody {
      tr{
        border-bottom: 1px solid rgb(199, 199, 199);
      }

      tr:nth-of-type(even){
        background-color: rgb(220, 220, 220);
      }

      td{
        padding: 12px;
      }
    }
  }
</style>
