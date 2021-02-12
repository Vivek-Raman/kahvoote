<template>
  <div class="vote-history-item">
    <hr />
    <div class="statement">
      {{ this.$props.statement }}
    </div>
    <div class="average">
      <strong>Average:</strong> <em>{{ this.$props.average }}</em>
    </div>
  </div>
</template>

<script>
export default {
  props: ['statement', 'average']
}
</script>

<style lang="scss">
  .vote-history-item {
    margin: 16px 0px;
  }
</style>
