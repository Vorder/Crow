<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-2">
        <Backlog></Backlog>
      </div>
      <div class="col-sm-8">
        <Timeline></Timeline>
      </div>
      <div class="col-sm-1"></div>
    </div>
  </div>
</template>

<script>
import Timeline from './components/Timelines.vue'
import Backlog from './components/Backlog.vue'

export default {
  name: 'App',

  components: {
   Timeline,
   Backlog
  },
}
</script>

<style>
@import './assets/bootstrap.min.css';
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  line-height: 1.5;
}
.h2, h2 {
  font-size: 1.65em;
  font-weight: bold;
}
</style>
