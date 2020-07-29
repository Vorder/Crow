<template>
<div class="content">
  <div :id=" this._uid +'l1' " class="l1"></div>
  <div :id=" this._uid +'l2' " class="l2"></div>
  <div :id=" this._uid +'l3' " class="l3"></div>
</div>
</template>
<script>

export default {
    props: {
        startrow: Number, 
        endrow:Number, 
        startdate:Number, 
        enddate:Number,
        datewidth: Number,
        gaplength: Number
    },
    methods: {
        drawlines(){
            const dateheight = 100;
            const datewidth = this.datewidth;
            const devheight = 50;
            const devwidth = 120;

            var l1 = document.getElementById((this._uid+'l1'));
            var l2 = document.getElementById(this._uid+'l2');
            var l3 = document.getElementById(this._uid+'l3');

            l1.style.top = dateheight + Math.round((devheight * (this.startrow-1)) + devheight/3) + 'px';
            l1.style.left = devwidth + this.startdate * datewidth - this.gaplength + 'px';
            l1.style.width = this.gaplength + 'px';
            
            l2.style.top = l1.style.top;
            l2.style.left =  devwidth + this.startdate * datewidth + 'px';
            l2.style.height = (this.endrow - this.startrow)* devheight + 'px';

            l3.style.top = dateheight + (devheight * (this.endrow-1)) + Math.round(devheight/3) + 'px';
            l3.style.left = l2.style.left;
            l3.style.width = (this.enddate-this.startdate) * datewidth + this.gaplength + 'px';
        },
    },
    mounted(){
        this.drawlines();
    }
}
</script>

<style>
.l1, .l2, .l3{
  position:absolute;
  width:3px;
  background-color:#388e3c;
}  
.l3, .l1 { 
    height: 3px;
}
.content {
    position: absolute;
}
</style>