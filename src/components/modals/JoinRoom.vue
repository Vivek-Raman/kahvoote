<template>
  <div id="join-room">
    <div id="create-room">
      <div class="bigtext">
        Join an Existing Room
      </div>
      <div class="input">
        <label for="roomID">Room ID</label>
        <input type="text" name="roomID" id="create-room--roomID" placeholder="123-456" />
      </div>
      <div class="input">
        <label for="userName">User Name</label>
        <input type="text" name="roomID" id="create-room--userName" placeholder="John Smith" />
      </div>
      <div class="input">
        <div class="checkbox-container">
          <input type="checkbox"
            name="isJoiningAsAdmin"
            id="create-room--isJoiningAsAdmin"
            v-model='isJoiningAsAdmin'
            required />
        </div>
        <label for="isJoiningAsAdmin">Join as Room Administrator?</label>
      </div>
      <div v-if="this.isJoiningAsAdmin" class="input">
        <label for="roomPassword">Password</label>
        <input type="password"
          name="roomPassword"
          id="create-room--roomPassword"
          placeholder="******"
          required />
      </div>
      <button @click="joinRoom()">Join</button>
    </div>
  </div>
</template>

<script>
import api from '../../config/api.js'
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isJoiningAsAdmin: false
    }
  },
  methods: {
    joinRoom () {
      const roomID = document.getElementById('create-room--roomID').value
      const userName = document.getElementById('create-room--userName').value

      let password = ''
      if (this.isJoiningAsAdmin) {
        password = document.getElementById('create-room--roomPassword').value
      }

      if (roomID === '' || userName === '' || (this.isJoiningAsAdmin && password === '')) {
        alert('Please fill in all the fields!')
        return
      }

      if (this.isJoiningAsAdmin) {
        axios({
          method: 'POST',
          url: api.BASE_URL + '/guest/addGuestAsAdmin',
          data: {
            admin: this.isJoiningAsAdmin,
            guestName: userName,
            roomId: roomID,
            password: password
          }
        })
          .then((response) => {
            if (response.data === '') {
              // unauthorized
              alert('Please enter the correct password.')
              return
            }

            // console.log({ url: response.config.url, status: response.status, data: response.data })

            this.setGuestID(response.data.guestId)
            this.setRoomID(response.data.room.roomId)
            this.setIsAdmin(response.data.admin)
            this.$router.push('/room/' + roomID)
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        axios({
          method: 'POST',
          url: api.BASE_URL + '/guest/addGuest',
          data: {
            admin: this.isJoiningAsAdmin,
            guestName: userName,
            roomId: roomID,
            password: password
          }
        })
          .then((response) => {
            // console.log({ url: response.config.url, status: response.status, data: response.data })

            this.setGuestID(response.data.guestId)
            this.setRoomID(response.data.room.roomId)
            this.setIsAdmin(response.data.admin)
            this.$router.push('/room/' + roomID)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    ...mapActions({
      setRoomID: 'setRoomID', setGuestID: 'setGuestID', setIsAdmin: 'setIsAdmin'
    })
  }
}
</script>
