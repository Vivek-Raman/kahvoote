<template>
  <div id="room-info">
    <Modal v-if="this.isModalUp" :content="this.modalContent" />
    <div class="room-info-container">
      <div class="room-info-contained">
        <div class="bigtext">Room created successfully!</div>
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
        <div class="input">
          <button @click="setModal('JoinRoom')">Join Room</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components: { Modal },
  data () {
    return {
      isModalUp: false,
      modalContent: ''
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
  }
}
</script>

<style lang="scss">
  #room-info {
    height: 98%;
    margin: min(8px, 1%) 8px;
  }

  #room-info > .room-info-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }

  .bigtext {
    font-weight: bold;
    font-size: larger;
  }

  .room-info-contained {
    height: 200px;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0px 0px 8px -1px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .room-info-contained > * {
    padding: 4px 0px;
  }
</style>
