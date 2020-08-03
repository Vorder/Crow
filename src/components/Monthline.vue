<template>
    <div id="container"
    :style="{ 'grid-template-columns': gridtemplate() }">
        <div class="firstblock"></div>
        <div class="dev" v-for="(dev, index) in developers" :key="dev"
        :style="{ 'grid-row': index+4 }">
            {{ dev }}
        </div>
        <div class="month" v-for="item in months()" :key="item[0]" 
        :style="{ 'grid-column': item[2]+2 +'/span '+ item[1], 
        'width': item[1]* 10 + 'px'}">
            <p>{{ item[0] }} </p>
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
            issuelist: issues,
            monthstart: null
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
            return Math.round((this.enddate - this.monthstart)/this.day_length)
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
                                    ((new Date(issues[k].endTime)) - this.monthstart)/this.day_length);
                                endblock = Math.round(
                                    ((new Date(issues[i].startTime)) - this.monthstart)/this.day_length);
                                n.push([issues[k].developerNum, issues[i].developerNum, 
                                startblock, endblock])
                            }
                        }
                    }
                }
            }
            return n;
        }
    },
    beforeMount(){
        this.monthstart = new Date(this.startdate);
        this.monthstart.setDate(1);
    },
    mounted(){
    },
     methods:{
        gridtemplate(){
            return "120px repeat(" + this.calendar_length +", 10px)";
        },
        find_date (issue) {
            var d2 = new Date(issue.startTime);
            var left = Math.round((d2 - (new Date(this.monthstart)))/this.day_length)+1;
            return left;
        },
        area (issue) {
            var column_start = this.find_date(issue)+1;
            var column_end = issue.days;
            var row = issue.developerNum+3;
            var a = '' + row + '/' + column_start + '/' + row +  '/span ' + column_end;
            return a;  
        },
        daysInMonth(iYear, iMonth) 
        { 
            return 32 - new Date(iYear, iMonth, 32).getDate();
        },
        months() {
            var days = 0;
            var n = new Array();
            var indx = 0;
            var years = [];
            var monthscount = 0;
            for(let j=this.startdate.getFullYear(); j<=this.enddate.getFullYear(); j++){
                years.push(j);
            }
            if(years.length == 1){
                monthscount = this.enddate.getMonth() - this.monthstart.getMonth();
            }
            else {
                monthscount = 11 - this.startdate.getMonth();
                for(let k=2;k<years.length;k++){
                    monthscount += 12;
                    }
                monthscount += this.enddate.getMonth() + 1
            }
            console.log(monthscount);
            var yc = 0;
            for(let i=0; i<=monthscount; i++){
                if((this.startdate.getMonth()+i)%12 == 0){yc++}
                days = this.daysInMonth(years[yc], (this.startdate.getMonth()+i)%12);
                n.push([month[(this.startdate.getMonth()+i)%12] + " " + years[yc], 
                days, indx]);
                indx += days;
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
    padding-top: 35px;
}
</style>
