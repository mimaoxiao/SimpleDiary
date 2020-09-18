<template>
    <div class="WriteEditor">
        <input type="text" placeholder="今天写点什么呢……" class="WriteEditorTitle">
        <div class="WriteEditorContent">
            <div v-for="(item,index) in data" :ref="index" :key="index" class="ContentText">
                {{item.content}}

                <div @click="DeleteVisible=true" :ref="index+'delete'" class="ContentTextDelete" style="background-color:rgb(218, 105, 133)" @mousedown="showclick('1delete')" @mouseup="backclick('1delete')" @mouseenter="showin('1delete')" @mouseleave="backin('1delete')">
                    <img class="ContentIcon" src="@/assets/writeDelete.svg"/>
                </div>
                <div :ref="index+'edit'" class="ContentTextEdit" style="background-color:rgb(218, 105, 133)" @mousedown="showclick('1edit')" @mouseup="backclick('1edit')" @mouseenter="showin('1edit')" @mouseleave="backin('1edit')">
                    <img class="ContentIcon" src="@/assets/writeEdit.svg"/>
                </div>

                <img v-if="index!=0" class="ContentUp" @mouseover="upHover=true" @mouseout="upHover=false" :src="upHover?hoverUp:normalUp"/>
                <img v-if="index!=data.length-1" class="ContentDown" @mouseover="downHover=true" @mouseout="downHover=false" :src="downHover?hoverDown:normalDown"/>
            </div>
            <WriteEditorDelete @close="DialogClose" :visible="DeleteVisible"/>
        </div>
        <div class="WriteEditorAdd">
            <textarea v-model="inputText" class="WriteEditorInput"></textarea>
            <div ref="check" class="WriteEditorButton" @mousedown="showclick('check')" @mouseup="backclick('check')" @mouseenter="showin('check')" @mouseleave="backin('check')" @click="Create">确认</div>
        </div>
        <div ref="submit" class="WriteEditorUpload" @mousedown="showclick('submit')" @mouseup="backclick('submit')" @mouseenter="showin('submit')" @mouseleave="backin('submit')" @click="Upload">
            上传
        </div>
        <WriteLoading v-if="LoadingVisible" @close="DialogClose" :visible="LoadingVisible" :action="action"/>
    </div>
</template>

<script>
import WriteEditorDelete from './Delete/Delete';
import WriteLoading from '../Loading/Loading';
export default {
    data(){
      return {
            DeleteVisible:false,
            LoadingVisible:false,
            action:'',
            upHover:false,
            downHover:false,
            normalUp:require('@/assets/up.svg'),
            normalDown:require('@/assets/down.svg'),
            hoverUp:require('@/assets/upfill.svg'),
            hoverDown:require('@/assets/downfill.svg'),
            data:[{
                type:'text',
                content:'meow'
            }],
            inputText:''
      };
    },
    components:{WriteEditorDelete,WriteLoading},
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
        },
        DialogClose(){
            this.DeleteVisible=false,this.LoadingVisible=false;
        },
        Create(){
            const text=this.inputText;
            this.data.push({
                type:'text',
                content:text
            });
            this.inputText='';

            let that=this;
            this.$nextTick(function(){
                let target=that.$refs[that.data.length-1];
                that.$anime({
                    easing: 'easeOutCirc',
                    duration:250,
                    targets:target,
                    translateX:[25,0],
                    opacity:[0,1]
                })      
            })
        },
        Upload(){
            const data=this.data;
            this.LoadingVisible=true;
            this.action=function(){
                let that=this;
                that.text='日记创建中……';
                this.$link.newDiary(data,function(res){
                    that.finish=true;
                    that.text=res.data.msg;
                    that.SuccessAnimate();
                },function(err){
                    that.finish=true;
                    that.text=err;
                    that.ErrorAnimate();
                });
            };
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

    display:flex;
    flex-direction: column;
    align-items: stretch;
}
.ContentText{
    position: relative;
    border: 5px solid #d14d6e;
    padding: 1em;
    margin: 1em;
    color: #ddabb7;
}
.ContentTextDelete{
    cursor: pointer;

    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    height: 100%;
    width: 5em;
    border-left: 5px solid #d14d6e;

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
    border-left: 5px solid #d14d6e;

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

.ContentUp{
    display: none;

    cursor: pointer;
    width: 2em;
    position: absolute;
    top: -1.7em;
    left: 50%;
    margin-left: -1em;
}
.ContentDown{
    display: none;

    cursor: pointer;
    width: 2em;
    position: absolute;
    bottom: -1.7em;
    left: 50%;
    margin-left: -1em;
}
.ContentText:hover .ContentUp,.ContentText:hover .ContentDown{
    display: block;
}

.WriteEditorAdd{
    border: 5px solid #d14d6e;
    border-top: none;
    display: flex;
}
.WriteEditorInput{
    flex-grow: 4;
    resize: none;
    background-color: #da6985;
    color: #ddabb7;
    border: none;
    caret-color:#ddabb7;
    font-family: 'KuaiLe';
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
