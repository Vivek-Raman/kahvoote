<template>
  <div id="create-room">
    <div class="title">
      Create a New Room
    </div>
    <div class="input">
      <label for="roomName">Room Name</label>
      <input type="text" name="roomName" id="create-room--roomName" placeholder="Monstrous Moonshine" />
    </div>
    <div class="input">
      <label for="roomPassword">Password</label>
      <input type="password" name="roomPassword" id="create-room--roomPassword" placeholder="******" />
    </div>
    <button @click="createRoom()">Create</button>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../config/api.js'

export default {
  // TODO: Integration (/room/addRoom)
  methods: {
    createRoom () {
      axios({
        method: 'POST',
        url: api.BASE_URL + '/room/addRoom',
        data: {
          roomName: 'Room1',
          password: 'password',
          roomDescription: 'asdasd'
        }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .input > * {
    margin: 4px;
    padding: 4px;
  }

  .input > input {
    border-width: 0px 0px 1px 0px;
  }

  .input > input:focus {
    outline-width: 0px;
    border-color: rgb(35, 230, 165);
    transition-duration: 250ms;
  }
</style>
