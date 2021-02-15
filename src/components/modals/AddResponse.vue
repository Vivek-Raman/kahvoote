<template>
  <div id="add-response">
    <div class="bigtext">
      Add Response
    </div>
    <div class="input">
      <label for="response">Select your response</label>
      <select name="response" id="add-response--response">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="input">
      <button @click="submitResponse()">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitResponse () {
      const myResponse = document.getElementById('add-response--response').value
      this.$parent.$parent.submitMyResponse(myResponse)
    }
  }
}
</script>

<style lang="scss">
  #add-response {
    display: flex;
    flex-direction: column;
  }

  #add-response > div:last-child {
    margin-bottom: 0px;
    justify-content: flex-end;
  }

  select {
    border: 1px solid grey;
  }
</style>
