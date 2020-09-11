<template>
    <div class="ReadList">
        <div class="ListTitle">日记列表</div>
        <div class="ListItem" style="border-color:rgb(60, 128, 218)" ref="0" @mousedown="showclick('0')" @mouseenter="showin('0')" @mouseleave="backin('0')">[2020-02-02 11:11:11] meow</div>
    </div>
</template>

<script>

export default {
    data(){
      return {};
    },
    methods:{
        showin(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                borderColor:'#9fc9ff'
            })
        },
        backin(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                borderColor:'#3c80da'
            });
        },
        showclick(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#9fc9ff'
            })          
        },
        backclick(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#5699f0'
            })         
        }
    }
}
</script>

<style scoped>
.ReadList{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 2em;
    margin-bottom: 2em;
    border-right: 5px solid #3c80da;
}
.ListTitle{
    font-size: 3em;
    user-select: none;
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    color: #74b0ff;
}
.ListItem{
    border: 5px solid #3c80da;
    padding: 1em;
    background-color: #5699f0;
    color: white;
}
</style>
