<template>
  <div id="room-info">
    Room created successfully!
    <!-- Users may join using this URL. -->
    <div id="room-info--url">
      <!-- TODO: use URL to fill in JoinRoom form -->
    </div>
    <div id="room-info--roomID">
      <!-- TODO: roomID click to copy to clipboard -->
      Room ID: {{ this.$route.params.roomID }}
    </div>
    <div class="input">
      <button @click="() => { this.$router.push('/') }">Back to Home</button>
    </div>
  </div>
</template>
// TODO: roomID in props
