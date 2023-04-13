<template>
  <div id="app">
    <nav>
      <router-link to="/HomeMenu">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1 class="bigheading">Meat</h1>
    <hr>
    <router-view/>
  </div>
</template>

<style lang="scss">

.bigheading {
  font-size: 32px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  border: none;
}

#add-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}

.btn {
  background-color: #42b983;
  border-radius: 100px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  font-size: 24px;
  text-decoration: none;
  &:hover {
      opacity: 0.9;
      box-shadow: 0 0 4px 4px rgba($color: #000000, $alpha: 0.4);
  }
}

.circle-btn {
  width: 48px;
}

.long-btn {
  width: fit-content;
  padding: 0 16px;
}

</style>
