<template>
    <div class="WriteEditor">
        <input type="text" placeholder="今天写点什么呢……" class="WriteEditorTitle">
        <div class="WriteEditorContent">
        </div>
        <div class="WriteEditorAdd">
            <textarea class="WriteEditorInput"></textarea>
            <div ref="check" class="WriteEditorButton" @mousedown="showclick('check')" @mouseup="backclick('check')" @mouseenter="showin('check')" @mouseleave="backin('check')">确认</div>
        </div>
        <div ref="submit" class="WriteEditorUpload" @mousedown="showclick('submit')" @mouseup="backclick('submit')" @mouseenter="showin('submit')" @mouseleave="backin('submit')">
            上传
        </div>
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
                backgroundColor:'#d14d6e'
            })
        },
        backin(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#da6985'
            });
        },
        showclick(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#a53e58'
            })          
        },
        backclick(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#d14d6e'
            })         
        }
    }
}
</script>

<style scoped>
.WriteEditor{
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 2em;
    margin-bottom: 2em;
    border-right: 5px solid #d14d6e;

    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.WriteEditorTitle{
    font-size: 3em;
    border: 5px solid #d14d6e;
    caret-color:#ddabb7;
    font-weight: bold;
    border-radius: 5px;
    background-color: #da6985;
    color: #ddabb7;
    text-align: center;
    margin:0.1em 0;
    font-family: 'KuaiLe';
}
.WriteEditorTitle:focus{
    border: 5px solid #d14d6e;
    box-shadow: 0px 0px 5px #d14d6e;
}
.WriteEditorContent{
    border: 5px solid #d14d6e;
    flex-grow: 1;
}
.WriteEditorAdd{
    border: 5px solid #d14d6e;
    border-top: none;
    display: flex;
}
.WriteEditorInput{
    flex-grow: 4;
    resize: none;
    font-family: 'HuangYou';
    background-color: #da6985;
    color: #ddabb7;
    border: none;
    caret-color:#ddabb7;
}
.WriteEditorButton{
    display: inline-block;
    flex-grow: 1;
    height: 100%;
    border-left: 5px solid #d14d6e;
    background-color: #da6985;
    color: #ddabb7;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}
.WriteEditorUpload{
    font-size: 1.5em;
    text-align: center;
    margin-top: 0.5em;
    color: #ddabb7;
    border: 5px solid #d14d6e;
    cursor: pointer;
    background-color: #da6985;
}
</style>
