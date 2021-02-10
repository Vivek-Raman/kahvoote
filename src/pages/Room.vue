<template>
  <div id="room">
    <div id="history" class="box">
      <div class="bigtext">
        Your responses
      </div>
      <div class="item-container">
        <VoteHistory v-for="item in this.history" :key="item.index" :statement='item.statement' :response='item.response' />
      </div>
    </div>
    <div id="voting-container" class="box">
      <div id="active-statement">
        active statement
      </div>
    </div>
    <div id="chat" class="box">
      chat
    </div>
  </div>
</template>

<script>
import VoteHistory from '../components/VoteHistory.vue'

export default {
  computed: {
    getRoomID () {
      return this.$route.params.roomID
    }
  },
  data () {
    return {
      history: {}
    }
  },
  mounted () {
    // TODO: Integration
    this.history = [
      {
        statement: 'What is love? Baby don\'t hurt me no more!',
        response: 8
      }, {
        statement: 'What is love? Baby don\'t hurt me no more!',
        response: 12
      }, {
        statement: 'What is love? Baby don\'t hurt me no more!',
        response: 15
      }, {
        statement: 'What is love? Baby don\'t hurt me no more!',
        response: 1
      }
    ]
  },
  components: {
    VoteHistory
  }
}
</script>

<style lang="scss">
  #room {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 98%;
    margin: min(8px, 1%) 8px;
  }

  .box {
    margin: 0px 8px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0px 0px 8px -1px lightgrey;
  }

  #history {
    width: 25%;
    min-width: 150px;
  }

  #voting-container {
    flex-grow: 1;
  }
</style>
