<template>
    <div class="ReadList">
        <div class="ListTitle">日记列表</div>
        <div class="ListItem" style="border-color:rgb(60, 128, 218)" v-for="(item,index) in list" @click="LoadingContent(item)" :key="index" :ref="index" @mousedown="showclick(index)" @mouseenter="showin(index)" @mouseleave="backin(index)">[{{item.year}}-{{item.month}}-{{item.day}} {{item.hour}}:{{item.minute}}:{{item.second}}] meow</div>
        <ReadListWarning v-if="fail" @close="DialogClose" :visible="fail" :text="failtext"/>
    </div>
</template>

<script>
import ReadListWarning from './Warning/Warning';
export default {
    data(){
      return {
          list:[],
          fail:false,
          failtext:''
      };
    },
    components:{ReadListWarning},
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
        },
        loadList(data){
            for(let i=0;i<data.length;i++){
                data[i]=data[i].split('-');
                let obj={};
                obj.year=data[i][0];
                obj.month=data[i][1];
                obj.day=data[i][2];
                obj.hour=data[i][3][0]+data[i][3][1];
                obj.minute=data[i][3][2]+data[i][3][3];
                obj.second=data[i][3][4]+data[i][3][5];
                data[i]=obj;
            }
            this.list=data;
        },
        DialogClose(){
            this.fail=false;
        },
        LoadingContent(data){
            this.$emit('LoadingContent',data);
        }
    },
    mounted(){
        const that=this;
        this.$link.diaryList(null,function(response){
            that.loadList(response.data.data);
        },function(err){
            console.log(err);
            that.fail=true;
            that.failtext=err;
        })
    },
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
