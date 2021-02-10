<template>
  <span id="modal" class="modal">
    <div class="modal-overlay" @click="removeModal()"></div>
    <div class="modal-content">
        <CreateRoom v-if="this.$props.content === 'CreateRoom'" />
        <JoinRoom v-if="this.$props.content === 'JoinRoom'" />
      <form action="" method="post">
      </form>
    </div>
  </span>
</template>

<style lang="scss">
  .modal-overlay {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(50, 50, 50, 0.69);
    transition-duration: 150ms;
  }

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 1010;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px -1px black;
    background-color: white;
  }
</style>

<script>
import CreateRoom from './modals/CreateRoom.vue'
import JoinRoom from './modals/JoinRoom.vue'

export default {
  components: {
    CreateRoom, JoinRoom
  },
  props: ['content'],
  methods: {
    removeModal () {
      this.$parent.setModal('')
    }
  }
}
</script>
