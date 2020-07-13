<template>
   <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  {{getMatchesFixturesGroups[groupIndex]}}
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  {{
                    getMatchesFixturesFromState[groupIndex][matchIndex]
                    .fixture
                  }}
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
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
                  <button class="confirm-button" @click="createAndSetDecision(1)">
                    POTWIERDZAM
                  </button>
                  <button class="reject-button" @click="createAndSetDecision(2)">
                    ODRZUCAM
                  </button>
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
      this.sendPlayerDecision({
        matchId: matchIdToSend,
        playerId: this.playerIndex,
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
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
