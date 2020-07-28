<template>
    <div class="issue" :style="{ 'border-left': border + 'px solid white', 
                                 'border-right': border + 'px solid white',
                                 'font-size': textsize + 'em' }">
      {{ name }} </div>
</template>

<script>
export default {
  props:{
      name: String,
      border: Number,
      textsize: Number
    }
}
</script>

<style>
.issue {
  width: 100%;
  height: 40px;
  border: 4px solid white;
  border-right: 20px solid white ;
  border-left: 20px solid white ;
  background-color: #283593;
  color: #ffffe4;
  padding-top: 5px;
  z-index: 2;
  text-shadow: 0px 0px 3px black;
  font-size: 1em;
}
</style>
