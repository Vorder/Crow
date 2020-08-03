<template>
<div class="logcontainer">
    <h2>BackLog</h2>
    <div id="log">
        <div class="issue_item" v-for="(item, index) in issue" :key="index">
            {{ item }}
        </div>
    </div>
</div>
</template>
<script>
import issues from '../../server_data/untrack_issues.json'

export default {
    data () {
        return {
            issue: issues
        }
    }    
}
</script>
<style>
.logcontainer {
    text-align: left;
}
#log {
    border-top: 2px solid #819ca9;
    /* height: 800px; */
    width: 100%;
}
.issue_item {
    margin: 10px;
}
.h2 {
    font-size: 1.5em;
}
</style>