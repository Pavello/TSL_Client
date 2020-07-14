<template>
  <tbody>
    <tr class="fixture">
          <td class="firstPlayer" @click="setValuesForDecision(0); showModal();"
          v-bind:class="[{confirmed : match.matchPlayerData[0].fixtureDecision == 1 },
          {rejected : match.matchPlayerData[0].fixtureDecision == 2 }]">{{match.matchPlayerData[0].player.firstName}}
          {{match.matchPlayerData[0].player.lastName}}</td>
          <td class="sign">:</td>
          <td class="secondPlayer" @click="setValuesForDecision(1); showModal()"
          v-bind:class="[{confirmed : match.matchPlayerData[1].fixtureDecision == 1 },
          {rejected : match.matchPlayerData[1].fixtureDecision == 2 }]">
          {{match.matchPlayerData[1].player.firstName}}
          {{match.matchPlayerData[1].player.lastName}}</td>
          <td class="matchFixture">{{match.fixture}}</td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['hideModal', 'showModal']),
    ...mapActions(['setDataForPlayerDecision']),
    setValuesForDecision(playerIndex) {
      this.setDataForPlayerDecision({
        groupId: this.groupIndex,
        matchId: this.matchIndex,
        playerId: playerIndex,
      });
    },
  },
  computed: {
    ...mapGetters([
      'getMatchesFixturesFromState',
      'getMatchesFixturesGroups',
      'getModalDecisionVisiblity',
    ]),
  },
  props: ['match', 'matchIndex', 'groupIndex'],
};
</script>

<style lang="scss" scoped>
  tbody{
    th{
      background-color: lightslategrey;
      text-align: center;
      width: 100%;
      padding: 10px 0px;
    }

    .confirmed {
      background-color: #4aab52;
    }

    .rejected {
      background-color: rgb(245, 76, 76);
    }

    td{
      margin: 10px 1em;
      padding: 0.5em 0.8em;
      text-align: center;
      vertical-align: middle;
      border: 1px solid rgb(167, 167, 167);
    }

    p{
      margin: 0;
      padding: 0;
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
