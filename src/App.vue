<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.placeholder {
  background: lightgrey;
  display: block;
}
</style>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>
