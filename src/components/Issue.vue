<template>
    <div id='rec' :style="{ width: width+'px' } " @wheel="zoom($event)"></div>
</template>

<script>
import json from '../../__tests__/data.json'

export default {
  props:{
      widths: Number
    },
  data (){
       return {
         width: 40,
         scale: 1,
         myJson: json
       }
  },
  methods: {
      zoom(event) {
         this.scale += event.deltaY * -0.01;

         // Restrict scale
         this.scale = Math.min(Math.max(.05, this.scale), 4);
         const el = document.getElementById('rec');
         // Apply scale transform
         el.style.transform = `scaleX(${this.scale})`;
      },
  },
  mounted(){
      console.log(this.myJson);
      this.width = this.myJson.issue1.days * 40
  }
}
</script>

<style>
#rec {
    width: 40px;
    height: 20px;
    border: 2px solid blue;
}
</style>
