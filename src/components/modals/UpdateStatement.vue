<template>
  <div id="update-statement">
    <div class="bigtext">Set the Current Statement</div>
    <div class="input">
      <textarea name="statement" id="update-statement--textarea" cols="50" rows="3"></textarea>
    </div>
    <div class="input">
      <button @click="updateStatement()">Update Statement</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateStatement () {
      const newStatement = document.getElementById('update-statement--textarea').value
      console.log('\'' + newStatement + '\' is the new statement')
      // TODO: Integration
    }
  }
}
</script>

<style lang="scss">
  #update-statement {
    display: flex;
    flex-direction: column;
  }

  #update-statement > .bigtext {
    margin-bottom: 32px;
  }

  #update-statement > div:last-child {
    justify-content: flex-end;
  }

  textarea {
    margin: 4px;
    padding: 4px;
    border-width: 0px 0px 1px 0px;
    resize: none;
  }

  textarea:focus {
    outline-width: 0px;
    border-color: rgb(35, 230, 165);
    transition-duration: 250ms;
  }
</style>
