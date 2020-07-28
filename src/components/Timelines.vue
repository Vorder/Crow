<template>
<div class="row">
    <div class="col-sm-12">
        <h2>TimeLine</h2>
        <keep-alive>
            <div @wheel.ctrl="zoom($event)">
                <component v-bind:is="timeline" 
                :startdate= startdate 
                :enddate = enddate
                :developers= developers>
                </component>
            </div>
        </keep-alive>
        <div class="row, endtime">
            <h3>Estimated end time: {{ endAll }}</h3>
        </div>
    </div>
</div>
</template>

<script>
import devs from '../../server_data/developers.json'
import dates from '../../server_data/calendar.json'
import Dayline from './Dayline.vue'
import Weekline from './Weekline.vue'


export default {
    components: {
        Dayline,
        Weekline
    },
    data () {
        return{
            scale : 1,
            developers: devs,
            startdate: null,
            enddate: null,
            endAll : "2020-09-9",
            // timelines: ["Hourline", "Dayline", "Weekline", "Monthline", "Yearline"]
            timelines: ["Weekline", "Dayline", "Weekline", "Dayline", "Weekline"]
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
    mounted(){
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
.endtime {
    text-align: center;
    margin-top: 30px;
    width: 1150px;
}
</style>