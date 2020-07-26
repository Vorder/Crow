<template>
<div class="content">
  <div :id=" ids+'l1' " class="l1"></div>
  <div :id=" ids+'l2' " class="l2"></div>
  <div :id=" ids+'l3' " class="l3"></div>
</div>
</template>
<script>

export default {
    props: {
        ids: Number,
        startrow: Number, 
        endrow:Number, 
        startdate:String, 
        enddate:String
    },
    methods: {
        drawlines(){
            const dateheight = 100;
            const datewidth = 80;
            const devheight = 50;
            const devwidth = 120;

            var d1 = new Date(this.startdate);
            var d2 = new Date(this.enddate);
            var one_day=1000*60*60*24;

            var l1 = document.getElementById((this.ids+'l1'));
            var l2 = document.getElementById(this.ids+'l2');
            var l3 = document.getElementById(this.ids+'l3');

            l1.style.top = dateheight + Math.round((devheight * (this.startrow-1)) + devheight/3) + 'px';
            l1.style.left = devwidth + (d1.getDate()-1) * datewidth - 20 + 'px';
            l1.style.width = 23 + 'px';
            
            l2.style.top = l1.style.top;
            l2.style.left =  devwidth + (d1.getDate()-1) * datewidth + 'px';
            l2.style.height = (this.endrow - this.startrow)* devheight + 'px';

            l3.style.top = dateheight + (devheight * (this.endrow-1)) + Math.round(devheight/3) + 'px';
            l3.style.left = l2.style.left;
            l3.style.width = ((d2 - d1)/one_day) * datewidth + 20 + 'px';
        },
    },
    mounted(){
        this.id = this._uid.toString();
        this.drawlines();
    }
}
</script>

<style>
.l1, .l2, .l3{
  position:absolute;
  width:3px;
  background-color:green;
}  
.l3, .l1 { 
    height: 3px;
}
.content {
    position: absolute;
}
</style>