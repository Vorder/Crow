<template>
<div class="row">
    <div class="col-sm-12">
        <h2>TimeLine</h2>
        <div id="container" @wheel.ctrl="zoom($event)">
            <div class="firstblock">
                Date Developers
            </div>
            <div class="date" v-for="(item, index) in onemonth()" 
            :key="item+index" 
            :style="{ 'grid-column': index+2 }">
                <p>{{ item.month }}</p>
                <p>{{ item.day }}</p>
            </div>
            <div class="dev" v-for="(dev, index) in developers" :key="dev"
            :style="{ 'grid-row': index+4 }">
            {{ dev }}
            </div>
            <div v-for="item in issuelist" :key="item.id" 
            :style="{ 'grid-area': area(item) }">
                <Issue :name=item.name></Issue>
            </div>
            <div class="lines" v-for="lin in lines" :key="lin[4]">
                <Dline 
                :startrow="lin[0]" 
                :endrow="lin[1]"
                :startdate="lin[2]"
                :enddate="lin[3]"
                :ids="lin[4]"></Dline>
            </div>
        </div>
        <div class="row, endtime">
            <h3>Estimated time: {{ endDate }}</h3>
        </div>
    </div>
</div>
</template>

<script>
import issues from '../../server_data/issues.json'
import devs from '../../server_data/developers.json'
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
            endDate : "2020-07-26",
            developers: devs,
            issuelist: issues
        }
    },
    methods:{
        find_date (issue) {
            var d1 = issue.startDate.split('-');
            var d2 = new Date(issue.startDate);
            var left = Math.round((d2 - (new Date(d1[0],this.today.getMonth(), 1)))/this.day_length)+1;
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
            l.scrollLeft += 500;    
        },
        onemonth (){
            var month_name = month[this.today.getMonth()];
            var len = this.daysInMonth(2020, this.today.getMonth());
            const n = new Array(len);
            for (let i = 0; i < len; i++) {
                n[i] = {
                    month: month_name,
                    day: i+1
                }
            }
            return n;
        },
        daysInMonth(iYear, iMonth) 
        { 
            return 32 - new Date(iYear, iMonth, 32).getDate();
        },
        zoom(event){
            event.preventDefault();
            this.scale += event.deltaY * -0.01;
            this.scale = Math.min(Math.max(.05, this.scale), 4);

            const el = document.getElementById('container');
            el.style.transform = `scaleX(${this.scale})`;
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
        lines: function(){
            var n = new Array();
            var c = 0;
            for(let i=0; i<issues.length; i++){
                if(issues[i].relatedTo.length !=0){
                    for(let j=0; j<issues[i].relatedTo.length; j++){
                        for(let k=0; k<issues.length; k++){
                            if(issues[k].id == issues[i].relatedTo[j]){
                                n.push([issues[k].developerNum, issues[i].developerNum,
                                 issues[k].endDate, issues[i].startDate, c++])
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
#container {
    display: grid;
    position: relative;
    border: 2px solid gray;
    width: 1200px;
    height: 700px;
    /* grid-gap:x 5px 50px; */
    /* grid-template: repeat(5, 30px) / repeat(120, 80px); */
    overflow: auto;
    text-align: center;
}
.item {
    border: 2px solid blue;
    grid-column: 1 / 4;
    grid-column: 1 / span 3;
    grid-row: 2 / 5;
    grid-area: 1 / 1 / 4 / 5;
}
.firstblock {
    grid-row: 1 / 4;
    grid-column: 1;
    position: sticky;
    top:0;
    z-index: 10;
    background-color: rgb(135, 222, 181);
    padding: 5px;
    font-size: 1em;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
}
.date {
    grid-row: 1 / 4;
    width: 80px;
    padding: 0px 20px;
    height: 100px;
    display: inline-block;
    border-right: 2px solid gray;
    border-bottom: 2px solid black;
    background-color: blanchedalmond;
    text-align: center;
    position: sticky;
    top:0;
    z-index: 10;
}
.dev {
    width: 120px;
    height: 50px;
    padding: 5px;
    border-right: 2px solid black;
    border-bottom: 2px solid grey;
    text-align: center;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 3;
}
.lines {
    position: absolute;
}
.endtime {
    text-align: center;
    margin-top: 30px;
}
</style>