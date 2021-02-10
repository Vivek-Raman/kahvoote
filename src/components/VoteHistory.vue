<template>
  <div class="vote-history-item">
    <hr />
    <div class="statement">
      {{ this.$props.statement }}
    </div>
    <div class="response">
      <strong>Your response:</strong> <em>{{ this.$props.response }}</em>
    </div>
  </div>
</template>

<script>
export default {
  props: ['statement', 'response']
}
</script>

<style lang="scss">
  .vote-history-item {
    margin: 16px 0px;
  }
</style>
