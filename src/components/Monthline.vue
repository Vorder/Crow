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
        <div class="month" v-for="(item, index) in months()" 
        :key="item+index" 
        :style="{ 'grid-column': index*30+13 +'/span 30' }">
            <p>{{ item }} </p>
        </div>
        <div v-for="item in issuelist" :key="item.id" 
        :style="{ 'grid-area': area(item) }">
            <Issue :name=item.name :border="2" :textsize="0.65"></Issue>
        </div>
        <div class="lines" v-for="lin in lines" :key="lin[0]+lin[2]">
            <Dline 
            :startrow="lin[0]" 
            :endrow="lin[1]"
            :startdate="lin[2]"
            :enddate="lin[3]"
            :datewidth=10
            :gaplength=2></Dline>
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
            issuelist: issues
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
                                end.setDate(end.getDate())
                                start = new Date(issues[i].startTime);
                                start.setDate(start.getDate())
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
        this.startdate.setDate(1);
        // this.goToday();
    },
     methods:{
        gridtemplate(){
            return "repeat(" + this.calendar_length +", 10px)";
        },
        find_date (issue) {
            var d2 = new Date(issue.startTime);
            var left = Math.round((d2 - (new Date(this.startdate)))/this.day_length)+1;
            return left;
        },
        area (issue) {
            var column_start = this.find_date(issue)+12;
            var column_end = issue.days;
            var row = issue.developerNum+3;
            var a = '' + row + '/' + column_start + '/' + row +  '/span ' + column_end;
            return a;  
        },
        goToday(){
            var l = document.getElementById("container");
            l.scrollLeft += 500;    
        },
        daysInMonth(iYear, iMonth) 
        { 
            return 32 - new Date(iYear, iMonth, 32).getDate();
        },
        months() {
            var n = new Array();
            var monthcount = this.enddate.getMonth() - this.startdate.getMonth();
            for(let i=0; i<=monthcount; i++){
                n.push(month[this.startdate.getMonth()+i] + " " + this.startdate.getFullYear());
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
    grid-column: 1 / 12;
    position: sticky;
    width: 120px;
    top:0;
}
.month {
    grid-row: 1 / 4;
    height: 100px;
    width: 300px;
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
