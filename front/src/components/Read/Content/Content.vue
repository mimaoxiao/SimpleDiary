<template>
    <div class="ReadContent">
        <div class="ContentTitle">Meow</div>
        <div v-for="(item,index) in DiaryData" :key="index" class="ContentText">
            {{item.content}}
            <div @click="DeleteVisible=true" :ref="index+'delete'" class="ContentTextDelete" style="background-color:rgb(86, 153, 240)" @mousedown="showclick(index+'delete')" @mouseup="backclick(index+'delete')" @mouseenter="showin(index+'delete')" @mouseleave="backin(index+'delete')">
                <img class="ContentIcon" src="@/assets/readDelete.svg"/>
            </div>
            
            <div @click="EditVisible=true" :ref="index+'edit'" class="ContentTextEdit" style="background-color:rgb(86, 153, 240)" @mousedown="showclick(index+'edit')" @mouseup="backclick(index+'edit')" @mouseenter="showin(index+'edit')" @mouseleave="backin(index+'edit')">
                <img class="ContentIcon" src="@/assets/readEdit.svg"/>
            </div>
            
        </div>
        <ReadContentEdit @close="DialogClose" :visible="EditVisible"/>
        <ReadContentDelete @close="DialogClose" :visible="DeleteVisible"/>
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
            EditVisible:false,
            DiaryData:[]
        };
    },
    props:['Aim','DiaryPath'],
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
    },
    mounted(){
        const that=this;
        this.$nextTick(function(){
            const target=that.$el;
            that.$anime({
                targets:target,
                easing: 'easeOutCirc',
                opacity:[0,1],
                translateX:[10,0],
                duration:500
            });
        });
        
        const data=this.DiaryPath;
        this.$link.readDiary(data,function(response){
            that.DiaryData=response.data.data;
        },function(err){
            console.log(err);

        })
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
    opacity:0;
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
