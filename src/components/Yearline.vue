<template>
    <div id="container"
    :style="{ 'grid-template-columns': gridtemplate() }">
        <div class="firstblock"></div>
        <div class="dev" v-for="(dev, index) in developers" :key="dev"
        :style="{ 'grid-row': index+4 }">
            {{ dev }}
        </div>
        <div class="year" v-for="(item, index) in years" :key="item" 
        :style="{ 'grid-column': index*366+2 + '/span 366' }">
            <p>{{ item }}</p>
        </div>
        <div class="monthyear" v-for="item in months()" :key="item[0]+item[2]" 
        :style="{ 'grid-column': item[2]+2 +'/span '+ item[1], 
        'width': item[1]* 5 + 'px'}">
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
            :datewidth=5
            :gaplength=3></Dline>
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
            years: [],
            startyear: null
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
            return this.years.length*366
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
                                    ((new Date(issues[k].endTime)) - this.startyear)/this.day_length);
                                endblock = Math.round(
                                    ((new Date(issues[i].startTime)) - this.startyear)/this.day_length)+1;
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
        this.computyears();
        this.startyear = new Date(this.years[0], 0, 1)
    },
    methods: {
        gridtemplate(){
            return "120px repeat(" + this.years.length*366 +", 5px)";
        },
        find_date (issue) {
            var d2 = new Date(issue.startTime);
            var left = Math.round((d2 - (new Date(this.startdate.getFullYear(),0,1)))/this.day_length)+2;
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
        computyears(){
            for(let j=this.startdate.getFullYear(); j<=this.enddate.getFullYear(); j++){
                this.years.push(j);
            }
        },
        months() {
            var days = 0;
            var n = new Array();
            var indx = 0;
            var j = -1;
            for(let i=0; i<this.years.length*12; i++){
                if(i%12 == 0){j++;}
                days = this.daysInMonth(this.years[j], i%12);
                n.push([month[i%12], days, indx]);
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
.year {
    grid-row: 1 / 2;
    height: 50px;
    display: inline-block;
    border-right: 2px solid #b0bec5;
    border-bottom: 2px solid #b0bec5;
    background-color: #ffe0b2;
    text-align: center;
    position: sticky;
    top:0;
    z-index: 10;
}
.monthyear {
    grid-row: 2 / 4;
    height: 50px;
    display: inline-block;
    border-right: 2px solid #b0bec5;
    border-bottom: 2px solid black;
    background-color: #ffe0b2;
    text-align: center;
    padding-top: 10px;
    position: sticky;
    top:50px;
    z-index: 10;
}
</style>
