<template>
    <div class="issue">{{ name }}</div>
</template>

<script>
export default {
  props:{
      name: String
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
  background-color: blue;
  color: bisque;
  padding-top: 5px;
  z-index: 2;
}
</style>
