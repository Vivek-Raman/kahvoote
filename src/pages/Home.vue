<template>
  <div id="home">
    <Modal v-if="this.isModalUp" :content="this.modalContent" />
    <div class="split-page">
      <div class="onboarding">
        <div class="bigtext">Kahvoote!</div>
        <picture>
          <source media="(max-width: 580px)" srcset="../assets/lowres/cat.jpeg">
          <source media="(min-width: 581px)" srcset="../assets/hires/catbig.png">
          <img src="" alt="Cat">
        </picture>
        <div>
          You need to vote on stuff. This is important. The cat demands that you vote responsibly. Tickets need to be completed, duties delegated, progress to be made. Cat is watching. Get to work.
        </div>
      </div>
      <div class="actions">
        <div class="bigtext">Welcome to Kahvoote!</div>
        <div class="sub-text">Your smart voting portal, made by Akshay, Shreeyansh, and Vivek</div>
        <button class="button" id="button-create-room" @click="setModal('CreateRoom')">
          Create Room
        </button>
        <button class="button" id="button-join-room" @click="setModal('JoinRoom')">
          Join Room
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
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
      // this.$router.push('/room/new')
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss">
  #home {
    height: 100%;
  }

  .bigtext {
    font-weight: bold;
    font-size: larger;
  }

  .sub-text {
    font-size: smaller;
    color: grey;
  }

  .split-page {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .split-page > div {
    margin: auto 0px;
    width: 45vw;
  }

  .split-page > div:first-child {
    border-radius: 16px;
    box-shadow: 0px 0px 8px -1px lightgrey;
  }

  .onboarding > div {
    padding: 16px;
  }

  .onboarding > picture > img {
    width: 100%;
  }

  .actions {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .actions > div {
    margin: 4px;
  }

  .button {
    border: 1px solid black;
    margin: 8px;
    width: 200px;
    padding: 16px 0px;
    border-radius: 16px;
    cursor: pointer;
  }

  #button-create-room {
    background: #BDE0FE;
  }

  #button-join-room {
    background-color: #A8DADC;
  }
</style>
