<template>
    <div class="issue" :style="{ 'border-left': border + 'px solid white', 
                                 'border-right': border + 'px solid white',
                                 'font-size': textsize + 'em' }">
      <div class="isstext"><span class="inner"> {{ name }} </span></div>
    </div>
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
  background-color: #42a5f5;
  color: black;
  padding: 5px;
  /* text-shadow: 0px 0px 3px black; */
  font-size: 1em;
  text-align: left;
}
.issue:hover ~ .isstext.inner{
  overflow: visible;
  position: sticky;
  left: 122px;
}
.isstext{
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;
  position: sticky;
  left: 122px;
}
.isstext:hover{
  overflow: visible;;
}
</style>
