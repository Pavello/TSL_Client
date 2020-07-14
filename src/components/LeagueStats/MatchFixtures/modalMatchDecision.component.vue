<template>
   <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <h3>{{getMatchesFixturesGroups[groupIndex]}}</h3>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  <p>
                  <span style="color: black;">Godzina: </span>
                  <strong>
                  {{
                    getMatchesFixturesFromState[groupIndex][matchIndex]
                    .fixture
                  }}
                  </strong>
                  </p>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <span style="color: black;">Zawodnik: </span>
                  <strong>
                    {{
                    getMatchesFixturesFromState[groupIndex][matchIndex]
                    .matchPlayerData[playerIndex]
                    .player
                    .firstName
                  }}
                  {{
                    getMatchesFixturesFromState[groupIndex][matchIndex]
                    .matchPlayerData[playerIndex]
                    .player
                    .lastName
                  }}
                  </strong>
                 </slot>
              </div>
              <div class="modal-buttons">

                    <button class="confirm-button" @click="createAndSetDecision(1)">
                      POTWIERDZAM
                    </button>

                    <button class="reject-button" @click="createAndSetDecision(2)">
                      ODRZUCAM
                    </button>

                    <button class="delete-button" @click="createAndSetDecision(0)">
                      USUŃ
                    </button>

              </div>
               <div class="modal-ok">
                <slot name="button-ok">
                   <button class="modal-default-button" @click="hideModal() ; getMatchesFixturesFromApi()">
                    OK
                  </button>
                  </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      groupIndex: 0,
      matchIndex: 0,
      playerIndex: 0,
      decision: 0,
    };
  },

  created() {
    this.groupIndex = this.getmodalDecisionIndexesDTO.groupId;
    this.matchIndex = this.getmodalDecisionIndexesDTO.matchId;
    this.playerIndex = this.getmodalDecisionIndexesDTO.playerId;
  },
  methods: {
    ...mapMutations(['hideModal', 'showModal']),
    ...mapActions(['sendPlayerDecision', 'getMatchesFixturesFromApi']),

    createAndSetDecision(playerDecision) {
      const matchIdToSend = this.getMatchesFixturesFromState[this.groupIndex][this.matchIndex].id;
      const mpdToSend = this.getMatchesFixturesFromState[this.groupIndex][this.matchIndex]
        .matchPlayerData[this.playerIndex].id;
      this.sendPlayerDecision({
        matchId: matchIdToSend,
        playerId: mpdToSend,
        decision: playerDecision,
      });
    },
  },
  computed: {
    ...mapGetters([
      'getmodalDecisionIndexesDTO',
      'getMatchesFixturesFromState',
      'getMatchesFixturesGroups',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 450px;
  height: 240px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-header h3 {
  margin-top: 0;
  padding: 7px;
  color: #008CBA;
  border-bottom: dimgray solid 1px;
}

.modal-body {
  margin: 20px 0;
  color: #008CBA;
}

.modal-footer{
  margin: 20px 0;
  color: #008CBA;
}

.modal-default-button {
  float: right;
}

.modal-buttons{
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: dimgray solid 1px;

    button{
      margin: inherit 5px;
      width: 135px;
      height: 40px;
      background-color: #008CBA;
      border: 0;
      border-radius: 10px;
      padding: 5px 7px;
      box-shadow: 4px 4px 6px rgba(2, 2, 2, 0.28);
    }
}
.modal-ok{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

    button{
      margin: 10px;
      width: 135px;
      height: 40px;
      background-color: #008CBA;
      border: 0;
      border-radius: 10px;
      padding: 5px 7px;
      box-shadow: 4px 4px 6px rgba(2, 2, 2, 0.28);
    }
}
</style>
