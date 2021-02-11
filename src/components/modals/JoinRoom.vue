<template>
  <div id="join-room">
    <div id="create-room">
      <div class="title">
        Join an Existing Room
      </div>
      <!-- <form @submit="this.joinRoom()" method="POST"> -->
        <div class="input">
          <label for="roomName">Room Name</label>
          <input type="text" name="roomName" id="create-room--roomName" placeholder="Monstrous Moonshine" />
        </div>
        <div class="input">
          <label for="roomPassword">Password</label>
          <input type="password" name="roomPassword" id="create-room--roomPassword" placeholder="******" />
        </div>
        <button @click="joinRoom()">Join</button>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    joinRoom () {
      const roomName = document.getElementById('create-room--roomName').value
      const password = document.getElementById('create-room--roomPassword').value
      if (roomName === '') {
        return
      }

      // TODO: Integration
      if (roomName === 'test' && password === '123') {
        const roomID = '001'
        this.$router.push('/room/' + roomID)
      } else {
        console.log('Room not found: ' + roomName)
      }
    }
  }
}
</script>
