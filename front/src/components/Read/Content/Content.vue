<template>
    <div class="ReadContent">
        <div class="ContentTitle">Meow</div>
        <div class="ContentText">
            test
            <div @click="DeleteVisible=true" ref="1delete" class="ContentTextDelete" style="background-color:rgb(86, 153, 240)" @mousedown="showclick('1delete')" @mouseup="backclick('1delete')" @mouseenter="showin('1delete')" @mouseleave="backin('1delete')">
                <img class="ContentIcon" src="@/assets/readDelete.svg"/>
            </div>
            <ReadContentDelete @close="DialogClose" :visible="DeleteVisible"/>
            <div @click="EditVisible=true" ref="1edit" class="ContentTextEdit" style="background-color:rgb(86, 153, 240)" @mousedown="showclick('1edit')" @mouseup="backclick('1edit')" @mouseenter="showin('1edit')" @mouseleave="backin('1edit')">
                <img class="ContentIcon" src="@/assets/readEdit.svg"/>
            </div>
            <ReadContentEdit @close="DialogClose" :visible="EditVisible"/>
        </div>
    </div>
</template>

<script>
import ReadContentDelete from './Delete/Delete';
import ReadContentEdit from './Edit/Edit';
export default {
    components:{ReadContentDelete,ReadContentEdit},
    data(){
        return {
            DeleteVisible:false,
            EditVisible:false
        };
    },
    methods:{
        showin(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#3c80da'
            })
        },
        backin(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#5699f0'
            });
        },
        showclick(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#326bb6'
            })          
        },
        backclick(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#3c80da'
            })         
        },
        DialogClose(){
            this.DeleteVisible=false,this.EditVisible=false;
        }
    }
}
</script>

<style scoped>
.ReadContent{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 2em;
    border: 5px solid #3c80da;
    color: #97c4ff;
}
.ContentTitle{
    font-size: 3em;
    user-select: none;
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}
.ContentText{
    position: relative;
    border: 5px solid #3c80da;
    padding: 1em;
    margin: 1em;
    background-color: #5699f0;
}
.ContentTextDelete{
    cursor: pointer;

    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    height: 100%;
    width: 5em;
    border-left: 5px solid #3c80da;

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ContentText:hover>.ContentTextDelete{
    display: flex;
}
.ContentTextEdit{
    cursor: pointer;

    position: absolute;
    right: 5em;
    top: 0;
    z-index: 2;
    height: 100%;
    width: 5em;
    border-left: 5px solid #3c80da;

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ContentText:hover>.ContentTextEdit{
    display: flex;
}
.ContentIcon{
    width: 2em;
    height: 2em;
}
</style>
