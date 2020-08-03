<template>
<div class="row">
    <div class="col-sm-12 timeline">
        <keep-alive>
            <div @wheel.ctrl="zoom($event)">
                <component v-bind:is="timeline" 
                :startdate= startdate 
                :enddate = enddate
                :developers= developers>
                </component>
            </div>
        </keep-alive>
    </div>
</div>
</template>

<script>
import devs from '../../server_data/developers.json'
import dates from '../../server_data/calendar.json'
import Hourline from './Hourline.vue'
import Dayline from './Dayline.vue'
import Weekline from './Weekline.vue'
import Monthline from './Monthline.vue'
import Yearline from './Yearline.vue'


export default {
    components: {
        Dayline,
        Hourline,
        Weekline,
        Monthline,
        Yearline
    },
    data () {
        return{
            scale : 1,
            developers: devs,
            startdate: null,
            enddate: null,
            timelines: ["Hourline", "Dayline", "Weekline", "Monthline", "Yearline"]
        }
    },
   
    computed: {
        timeline: function(){
            return this.timelines[this.scale]
        },
        day_length: function() {
            var one_day=1000*60*60*24;
            return one_day;
        },
        today: function() {
            return new Date();
        },
        calendar_length: function() {
            return (this.enddate - this.startdate)/this.day_length
        },
    },
    beforeMount(){
        this.startdate = new Date(dates.start);
        this.enddate = new Date(dates.end);
    },
    methods:{
        zoom(event){
            event.preventDefault();

            this.scale += event.deltaY > 0  ? (this.scale < 4 ? 1: 0) : (this.scale>0 ? -1 : 0); 
        },      
    }
}
</script>

<style>
.timeline {
    margin-top: 40px;
}
</style>