<template>
    <div id="container"
    :style="{ 'grid-template-columns': gridtemplate() }">
        <div class="firstblock">
            Date Developers
        </div>
        <div class="dev" v-for="(dev, index) in developers" :key="dev"
        :style="{ 'grid-row': index+4,
         }">
            {{ dev }}
        </div>
        <div class="date" v-for="(item, index) in calendar()" 
        :key="item+index" 
        :style="{ 'grid-column': index+2 }">
            <p>{{ item.month }}</p>
            <p>{{ item.day }}</p>
        </div>
        <div v-for="item in issuelist" :key="item.id" 
        :style="{ 'grid-area': area(item) }">
            <Issue :name=item.name></Issue>
        </div>
        <div class="lines" v-for="lin in lines" :key="lin[0]+lin[2]">
            <Dline 
            :startrow="lin[0]" 
            :endrow="lin[1]"
            :startdate="lin[2]"
            :enddate="lin[3]"
            :datewidth=80
            :gaplength=20></Dline>
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
            return "120px repeat(" + this.calendar_length +", 80px)";
        },
        find_date (issue) {
            var d = new Date(issue.startTime);
            var left = Math.round((d - this.startdate)/this.day_length)+1;
            return left;
        },
        area (issue) {
            var column_start = this.find_date(issue)+1 
            var column_end = issue.days;
            var row = issue.developerNum+3;
            var a = '' + row + '/' + column_start + '/' + row +  '/span ' + column_end;
            return a;  
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
            for(let i=0; i<issues.length; i++){
                if(issues[i].relatedTo.length !=0){
                    for(let j=0; j<issues[i].relatedTo.length; j++){
                        for(let k=0; k<issues.length; k++){
                            if(issues[k].id == issues[i].relatedTo[j]){
                                startblock = Math.round(
                                    ((new Date(issues[k].endTime)) - this.startdate)/this.day_length);
                                endblock = Math.round(
                                    ((new Date(issues[i].startTime)) - this.startdate)/this.day_length);
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

.date {
    grid-row: 1 / 4;
    width: 80px;
    padding: 0px 20px;
    height: 100px;
    display: inline-block;
    border-right: 2px solid #b0bec5;
    border-bottom: 2px solid black;
    background-color: #ffe0b2;
    text-align: center;
    position: sticky;
    top:0;
    z-index: 10;
}
</style>