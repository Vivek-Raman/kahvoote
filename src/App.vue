<template>
  <div id="app">
    <nav>
      <ul>
        <router-link to="/" tag="li"><header>Kahvoote</header></router-link>
        <router-link to="/" tag="li">Home</router-link>
        <router-link to="/about" tag='li'>About</router-link>
        <router-link to="/team" tag='li'>Team</router-link>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0px;
  height: 100%;
}

#app {
  font-family: 'Helvetica Neue', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}

// container to cover remaining area of screen https://stackoverflow.com/a/28771764
.container {
  flex-grow: 1;
}

header {
  font-weight: bold;
}

nav > ul {
  list-style: none;
  padding-inline-start: 0px;
  margin: auto;
  background-color: aliceblue;
  display: flex;
}

nav > ul > li {
  cursor: pointer;
  padding: 16px;
}

nav > ul > li:hover {
  background-color: aquamarine;
  transition-delay: 50ms;
  transition-duration: 150ms;
}
</style>
