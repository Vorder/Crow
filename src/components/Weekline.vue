<template>
    <div id="container"
    :style="{ 'grid-template-columns': gridtemplate() }">
        <div class="firstblock">
            Date Developers
        </div>
        <div class="dev" v-for="(dev, index) in developers" :key="dev"
        :style="{ 'grid-row': index+4 }">
            {{ dev }}
        </div>
        <div class="week" v-for="(item, index) in weeks()" 
        :key="item+index" 
        :style="{ 'grid-column': index*7+7 +'/span 7' }">
            <p>{{ item.week }} </p>
            <p>{{ item.dates }} </p>
        </div>
        <div v-for="item in issuelist" :key="item.id" 
        :style="{ 'grid-area': area(item) }">
            <Issue :name=item.name :border="5" :textsize="0.75"></Issue>
        </div>
        <div class="lines" v-for="lin in lines" :key="lin[0]+lin[2]">
            <Dline 
            :startrow="lin[0]" 
            :endrow="lin[1]"
            :startdate="lin[2]"
            :enddate="lin[3]"
            :datewidth=20
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
            issuelist: issues,
            diffstart: 0
        }
    },
    props: {
        developers: Array,
        startdate: Date,
        enddate: Date
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
            return (this.enddate - this.startdate)/this.day_length
        },
        lines: function(){
            var n = new Array();
            var end = null;
            var start = null;
            for(let i=0; i<issues.length; i++){
                if(issues[i].relatedTo.length !=0){
                    for(let j=0; j<issues[i].relatedTo.length; j++){
                        for(let k=0; k<issues.length; k++){
                            if(issues[k].id == issues[i].relatedTo[j]){
                                end = new Date(issues[k].endTime);
                                end.setDate(end.getDate() + this.diffstart)
                                start = new Date(issues[i].startTime);
                                start.setDate(start.getDate() + this.diffstart)
                                n.push([issues[k].developerNum, issues[i].developerNum, 
                                end.toString(), start.toString()])
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
    },
     methods:{
        gridtemplate(){
            return "repeat(" + this.calendar_length +", 20px)";
        },
        find_date (issue) {
            var d2 = new Date(issue.startTime);
            var left = Math.round((d2 - (new Date(this.startdate)))/this.day_length)+1;
            return left;
        },
        area (issue) {
            var column_start = this.find_date(issue)+6+ this.diffstart;
            var column_end = issue.days;
            var row = issue.developerNum+3;
            var a = '' + row + '/' + column_start + '/' + row +  '/span ' + column_end;
            return a;  
        },
        goToday(){
            var l = document.getElementById("container");
            l.scrollLeft += 500;    
        },
        weeks() {
            var n = Array();
            var w = 1;
            var start = new Date(this.startdate);
            this.diffstart = start.getDay()<6 ? start.getDay()+1 : 0;
            // var end = new Date(this.enddate);
            start.setDate(start.getDate() - this.diffstart);
            var counter = new Date(start);
    
            for(let i=1; i<this.calendar_length+this.diffstart; i++) {
                if(counter.getDay() == 6) {
                    n.push({ week: "Week " + w++, 
                    dates: counter.getDate() + month[counter.getMonth()] + " - "});
                }
                if(counter.getDay() == 5){
                    n[n.length-1].dates += counter.getDate() + month[counter.getMonth()]
                }
                counter.setDate(counter.getDate() + 1);
            }
            if(counter.getDay() != 6){
                n[n.length-1].dates += this.enddate.getDate() + month[this.enddate.getMonth()]
            }
            return n;
            
        },

    }
}
</script>

<style>
@import '../assets/timeline.css';

.firstblock {
    grid-row: 1 / 4;
    grid-column: 1 / 6;
    position: sticky;
    width: 120px;
    top:0;
}
.week {
    grid-row: 1 / 4;
    height: 100px;
    width: 140px;
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