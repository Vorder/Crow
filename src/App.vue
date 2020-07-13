<template>
  <div id="app">
    <center>
      <issue v-model="width"></issue>
    </center>
  </div>
</template>

<script>
import Issue from './components/Issue.vue'

export default {
  name: 'App',
  components: {
   Issue
  },
  data () {
    return{
      width: 100,
      scale: 1
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
