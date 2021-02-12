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
            :statement='item.statementContent'
            :average='item.average' />
        </div>
      </div>

      <div id="voting-container" class="box">
        <div class="bigtext">
          {{ this.roomName }}
        </div>
        <div>
          <em>{{ this.roomDescription }}</em>
        </div>
        <div id="active-statement">
          <div class="statement">
            {{ this.activeStatement.statementContent }}
          </div>
          <button v-if="this.isAdmin()" @click="setModal('UpdateStatement')">Update Statement</button>
        </div>

        <button @click="setModal('AddResponse')">Add Response</button>
        <!-- TODO: leave room (guest) / end room (admin) -->

        <GuestList roomID='roomID' :viewAsAdmin='this.isAdmin()' />
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
import { mapGetters } from 'vuex'
import axios from 'axios'
import api from '../config/api.js'

export default {
  data () {
    return {
      isModalUp: false,
      modalContent: '',

      roomName: '',
      roomDescription: '',

      statements: [],
      activeStatement: {},
      history: []
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
    },
    ...mapGetters([
      'roomID',
      'guestID',
      'isAdmin'
    ])
  },
  mounted () {
    // TODO: redirect if store values don't exist
    console.log({ roomID: this.roomID(), guestID: this.guestID(), isAdmin: this.isAdmin() })

    // TODO: Integration
    // get room info
    axios({
      method: 'GET',
      url: api.BASE_URL + '/room/getRoom/' + this.roomID()
    })
      .then((response) => {
        console.log({ url: response.config.url, status: response.status, data: response.data })

        this.roomName = response.data.roomName
        this.roomDescription = response.data.roomDescription
      })
      .catch((error) => {
        console.error(error)
      })

    // get statements info
    axios({
      method: 'GET',
      url: api.BASE_URL + '/statement/displayStatement/' + this.roomID()
    })
      .then((response) => {
        console.log({ url: response.config.url, status: response.status, data: response.data })

        this.activeStatement = response.data[0]
        this.history = response.data.slice(1)
      })
      .catch((error) => {
        console.error(error)
      })

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

    this.activeStatement = response.data.activeStatement.content
    // this.history = response.data.history
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
