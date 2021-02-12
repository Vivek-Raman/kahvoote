<template>
  <div id="room">
    <Modal v-if="this.isModalUp" :content="this.modalContent" />
    <div class="flex">

      <div id="history" class="box">
        <div class="bigtext">
          Your responses
        </div>
        <div class="item-container">
          <VoteHistory
            v-for="item in this.history"
            :key="item.index"
            :statement='item.statement.statementContent'
            :response='item.myResponse.responseValue' />
        </div>
      </div>

      <div id="voting-container" class="box">

        <div id="active-statement">
          <div class="bigtext">
            Active Statement
          </div>
          <div class="statement">
            {{ this.activeStatement }}
          </div>
          <button v-if="this.isAdmin" @click="setModal('UpdateStatement')">Update Statement</button>
        </div>

        <button @click="setModal('AddResponse')">Add Response</button>

        <GuestList roomID='getRoomID' :viewAsAdmin='this.isAdmin' />
      </div>

      <div id="chat" class="box">
        <div class="bigtext">
          Chat
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoteHistory from '../components/VoteHistory.vue'
import Modal from '../components/Modal.vue'
import GuestList from '../components/GuestList.vue'

export default {
  computed: {
    getRoomID () {
      return this.$route.params.roomID
    }
  },
  data () {
    return {
      isModalUp: false,
      modalContent: '',

      history: {},
      activeStatement: '',
      isAdmin: false
    }
  },
  methods: {
    setModal (content) {
      if (content === '' || content === null) {
        this.isModalUp = false
        return
      }

      this.modalContent = content
      this.isModalUp = true
    }
  },
  mounted () {
    // TODO: redirect if guestID doesn't exist
    // TODO: Integration
    const response = {
      status: 'OK',
      data: {
        room: {
          roomID: 123,
          roomName: 'Travel Team - Sprint 420',
          password: 's3cret',
          isActive: true
        },
        activeStatement: {
          content: 'Ticket 3235: Discard all REST APIs and implement carrier pigeon'
        },
        history: [
          {
            statement: {
              statementID: 41,
              statementContent: 'Ticket 3234: Find a pigeon training school',
              timestamp: 'forever',
              roomID: 123
            },
            myResponse: {
              responseID: 161,
              statementID: 41,
              guestID: 1,
              responseValue: 18
            }
          }, {
            statement: {
              statementID: 40,
              statementContent: 'Ticket 3233: Plant trees',
              timestamp: 'a while ago',
              roomID: 123
            },
            myResponse: {
              responseID: 160,
              statementID: 41,
              guestID: 1,
              responseValue: 12
            }
          }
        ]
      }
    }

    const isAdmin = true

    this.isAdmin = isAdmin
    this.activeStatement = response.data.activeStatement.content
    this.history = response.data.history
  },
  components: {
    VoteHistory, Modal, GuestList
  }
}
</script>

<style lang="scss">
  #room {
    height: 98%;
    margin: min(8px, 1%) 8px;
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }

  .bigtext {
    font-weight: bold;
    font-size: larger;
  }

  .box {
    width: 25%;
    min-width: 150px;
    margin: 0px 8px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0px 0px 8px -1px lightgrey;
  }

  #voting-container {
    flex-grow: 1;
    min-width: 350px;
  }
</style>
