<template>
  <div id="home">
    <div class="onboarding">
      <div>Kahvoote!</div>
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
      <div class="welcome-text">Welcome to Kahvoote!</div>
      <div class="sub-text">asd</div>
      <div id="button-create-room">
        Create Room
      </div>
      <div id="button-join-room">
        Join Room
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // if logged in, redirect
}
</script>

<style lang="scss">
  #home {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
  }

  #home > div {
    margin: auto 0px;
    max-width: 40vw;
  }

  .onboarding {
    border-radius: 16px;
    box-shadow: 0px 0px 8px -1px lightgrey;
  }

  .onboarding > div {
    padding: 16px;
  }

  .onboarding > picture > img {
    width: 100%;
  }
</style>
