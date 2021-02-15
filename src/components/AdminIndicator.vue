<template>
  <div class="admin-indicator" v-if="this.$props.isAdmin">👑</div>
</template>

<script>
export default {
  props: ['isAdmin']
}
</script>

<style lang="scss">
  .admin-indicator {
    display: inline;
  }
</style>
