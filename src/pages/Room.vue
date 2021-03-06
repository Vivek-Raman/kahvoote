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
          <label class="statement">
            Room Name:
          </label>
          {{ this.roomName }}
        </div>
        <div>
          <em>{{ this.roomDescription }}</em>
        </div>
        <div id="active-statement">
          <div class="statement">
            {{ this.activeStatement.statementContent }}
          </div>
        </div>
        <button v-if="this.isAdmin()" @click="setModal('UpdateStatement')">Update Statement</button>
        <button @click="setModal('AddResponse')">Add Response</button>
        <button v-if="this.isAdmin()" @click="endRoom()">End Room</button>

        <GuestList
          :statementID='this.activeStatement.statementId'
          :viewAsAdmin='this.isAdmin()' />
      </div>

      <div id="right-panel" class="box">
        <div class="bigtext">
          Stats
        </div>
        <div id="room--stats">
          stats go here
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
      history: [],

      setIntervalIDs: []
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
    updateStatement (newStatement) {
      axios({
        method: 'POST',
        url: api.BASE_URL + '/statement/addStatement',
        data: {
          roomId: this.roomID(),
          statementContent: newStatement
        }
      })
        .then((response) => {
          console.log({ url: response.config.url, status: response.status, data: response.data }) // TODO: remove axios log
        })
        .catch((error) => {
          console.error(error)
        })
    },
    submitMyResponse (myResponse) {
      axios({
        method: 'POST',
        url: api.BASE_URL + '/responses/addResponses',
        data: {
          guestId: this.guestID(),
          responseValue: myResponse,
          statementId: this.activeStatement.statementId
        }
      })
        .then((response) => {
          console.log({ url: response.config.url, status: response.status, data: response.data }) // TODO: remove axios log
        })
        .catch((error) => {
          console.error(error)
        })
    },
    endRoom () {
      axios({
        method: 'GET',
        url: api.BASE_URL + '/room/deleteRoom/' + this.roomID()
      })
        .then((response) => {
          console.log({ url: response.config.url, status: response.status, data: response.data }) // TODO: remove axios log
        })
        .catch((error) => {
          console.error(error)
        })

      this.$router.push('/')
    },
    getStatementsInfo () {
      axios({
        method: 'GET',
        url: api.BASE_URL + '/statement/displayStatement/' + this.roomID()
      })
        .then((response) => {
          console.log({ url: response.config.url, status: response.status, data: response.data }) // TODO: remove axios log

          if (response.data.length <= 0) {
            return
          }

          this.activeStatement = response.data[0]
          this.history = response.data.slice(1)

          this.getStatementStats()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getStatementStats () {
      axios({
        method: 'GET',
        url: api.BASE_URL + '/responses/getStats/' + this.activeStatement.statementId
      })
        .then((response) => {
          console.log({ url: response.config.url, status: response.status, data: response.data }) // TODO: remove axios log
          let stats = ''
          for (var stat in response.data) {
            stats += stat + ': ' + response.data[stat] + '\n'
          }
          document.getElementById('room--stats').innerText = stats
        })
        .catch((error) => {
          console.error(error)
        })
    },
    ...mapGetters([
      'roomID',
      'guestID',
      'isAdmin'
    ])
  },
  mounted () {
    if (this.isAdmin === true) {
      this.isModalUp = true
      this.modalContent = 'UpdateStatement'
    } else {
      this.isModalUp = false
      this.modalContent = ''
    }

    // TODO: redirect if store values don't exist
    if (this.roomID() === '' || this.guestID() === '') {
      console.error('Invalid state: Join through Home page')
      this.$router.push('/?err=invalidstate')
      return
    }

    // get room info
    axios({
      method: 'GET',
      url: api.BASE_URL + '/room/getRoom/' + this.roomID()
    })
      .then((response) => {
        console.log({ url: response.config.url, status: response.status, data: response.data }) // TODO: remove axios log

        this.roomName = response.data.roomName
        this.roomDescription = response.data.roomDescription
      })
      .catch((error) => {
        console.error(error)
      })

    // get statements info
    this.setIntervalIDs.push(setInterval(() => this.getStatementsInfo(), 5000))

    // get statement stats
    this.setIntervalIDs.push(setInterval(() => this.getStatementStats(), 5000))
  },
  beforeDestroy () {
    for (var i = 0; i < this.setIntervalIDs.length; ++i) {
      clearInterval(this.setIntervalIDs[i])
    }
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

  #voting-container > button {
    margin: 8px;
  }
</style>
