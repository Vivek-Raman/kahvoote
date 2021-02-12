<template>
  <div id="join-room">
    <div id="create-room">
      <div class="title">
        Join an Existing Room
      </div>
      <div class="input">
        <label for="roomID">Room ID</label>
        <input type="text" name="roomID" id="create-room--roomID" placeholder="123-456" />
      </div>
      <div class="input">
        <label for="roomPassword">Password</label>
        <input type="password" name="roomPassword" id="create-room--roomPassword" placeholder="******" />
      </div>
      <button @click="joinRoom()">Join</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    joinRoom () {
      const roomID = document.getElementById('create-room--roomID').value
      const password = document.getElementById('create-room--roomPassword').value
      if (roomID === '') {
        return
      }

      // TODO: Integration
      if (roomID === 'test' && password === '123') {
        const roomID = '001'
        this.$router.push('/room/' + roomID)
      } else {
        console.log('Room not found: ' + roomID)
      }
    }
  }
}
</script>
