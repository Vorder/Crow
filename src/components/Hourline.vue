<template>
    <div id="container"
    :style="{ 'grid-template-columns': gridtemplate() }">
        <div class="firstblock"></div>
        <div class="dev" v-for="(dev, index) in developers" :key="dev"
        :style="{ 'grid-row': index+4,
         }">
            {{ dev }}
        </div>
        <div class="datetime" v-for="(item, index) in calendar()" 
        :key="item+index" 
        :style="{ 'grid-column': index*24+2 + '/span 24' }">
            <p>{{ item.month }} {{ item.day }}</p>
        </div>
        <div class="time" v-for="n in calendar_length*24" 
        :key="n" 
        :style="{ 'grid-column': n+1 }">
            <div class="hour" v-if="n%24 == 0">00:00</div>
            <div class="hour" v-else-if="n%24 < 10">0{{ n%24 }}:00</div>
            <div class="hour" v-else>{{ n%24 }}:00</div>
        </div>
        <div v-for="item in issuelist" :key="'issue'+item.id" 
        :style="{ 'grid-area': area(item) }">
            <Issue :name=item.name :border="5"></Issue>
        </div>
        <div class="lines" v-for="lin in lines" 
        :key="String(lin[0])+lin[2]+lin[3]">
            <Dline 
            :startrow="lin[0]" 
            :endrow="lin[1]"
            :startdate="lin[2]"
            :enddate="lin[3]"
            :datewidth=30
            :gaplength=5></Dline>
        </div>
    </div>
</template>

<script>
import issues from '../../server_data/issues.json'
import Issue from './Issue.vue'
import Dline from './Line.vue'

const month = new Array("Jan", "Feb", "Mar", "Apr", "May", 
"Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

export default {
    components: {
        Issue,
        Dline
    },
    data () {
        return{
            scale : 1,
            issuelist: issues,
        }
    },
    props: {
        developers: Array,
        startdate: Date,
        enddate: Date
    },
    methods:{
        gridtemplate(){
            return "120px repeat(" + this.calendar_length*24 +", 30px)";
        },
        find_date (issue) {
            var stime = new Date(issue.startTime);
            var sday = Math.round((stime - this.startdate)/this.day_length);
            var scol = sday*24 + stime.getHours()+1;

            var etime = new Date(issue.endTime);
            var eday = Math.round((etime - this.startdate)/this.day_length)
            var ecol = eday*24 + etime.getHours()+2;
            return [scol , ecol];
        },
        area (issue) {
            var columns = this.find_date(issue); 
            var row = issue.developerNum+3;
            var len = '' + row + '/' + columns[0] + '/' + row + '/' + columns[1];
            return len;  
        },
        goToday(){
            var l = document.getElementById("container");
            l.scrollLeft += ((this.today - this.startdate)/this.day_length)*80 - 450; 
        },
        calendar (){
            var dayss = new Array(this.calendar_length);
            var counter = new Date(this.startdate);
            for (let i = 0; i <= this.calendar_length ; i++){
                if(counter.getDate() == this.today.getDate() &&
                   counter.getMonth()==this.today.getMonth() &&
                   counter.getFullYear() == this.today.getFullYear()) {
                    dayss[i] = { 
                        month: month[this.today.getMonth()],
                        day: this.today.getDate()+ "\nToday"
                        };
                }
                else {
                    dayss[i] = { 
                        month: month[counter.getMonth()],
                        day: counter.getDate()
                    }
                }
                counter.setDate(counter.getDate() + 1);
            }
            return dayss
        },
    },
    computed: {
        day_length: function() {
            var one_day=1000*60*60*24;
            return one_day;
        },
        today: function() {
            return new Date();
        },
        calendar_length: function() {
            return Math.round((this.enddate - this.startdate)/this.day_length)
        },
        lines: function(){
            var n = new Array();
            var startblock = null;
            var endblock = null;
            var etime = null;
            var stime = null;
            for(let i=0; i<issues.length; i++){
                if(issues[i].relatedTo.length !=0){
                    for(let j=0; j<issues[i].relatedTo.length; j++){
                        for(let k=0; k<issues.length; k++){
                            if(issues[k].id == issues[i].relatedTo[j]){
                                stime = new Date(issues[k].endTime)
                                startblock = Math.round(
                                    (stime - this.startdate)/this.day_length);
                                startblock = startblock * 24 + stime.getHours()
                                etime = new Date(issues[i].startTime) 
                                endblock = Math.round(
                                    (etime - this.startdate)/this.day_length);
                                endblock = endblock*24 + etime.getHours()-1
                                n.push([issues[k].developerNum, issues[i].developerNum, 
                                startblock, endblock]);
                            }
                        }
                    }
                }
            }
            return n;
        }
    },
    mounted(){
        // this.goToday();
    }
}
</script>

<style>
@import '../assets/timeline.css';

.datetime {
    grid-row: 1 / 2;
    width: 720px;
    padding: 10px 20px;
    height: 40px;
    display: inline-block;
    border-right: 2px solid #b0bec5;
    background-color: #ffe0b2;
    text-align: center;
    position: sticky;
    top:0;
    z-index: 10;
}
.time {
    grid-row: 2 / 4;
    width: 30px;
    height: 60px;
    padding-top: 9px;
    display: inline-block;
    border-right: 2px solid #b0bec5;
    border-top: 2px solid #b0bec5;
    border-bottom: 2px solid black;
    background-color: #ffe0b2;
    text-align: center;
    position: sticky;
    top:0;
    z-index: 12;
}
.hour {
    transform: rotate(90deg);
    padding-top: 0;
}
</style>