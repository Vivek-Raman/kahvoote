<template>
  <span id="create-room" class="modal">
    <div class="modal-overlay" @click="removeModal()"></div>
    <div class="modal-content">
      <div class="title">
        Create a New Room
      </div>
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
    position: translate(-50%, -50%);

    z-index: 1010;
    padding: 16px;
    border: 2px solid aquamarine;
    background-color: white;
    transition-duration: 150ms;
  }
</style>

<script>
export default {
  methods: {
    removeModal () {
      this.$parent.setCreateRoomModalVisibility(false)
    }
  }
}
</script>
