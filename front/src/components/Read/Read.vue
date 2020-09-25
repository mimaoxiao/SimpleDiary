<template>
    <div class="Read">
        <ReadList @LoadingContent="LoadingContent" class="ReadList"/>
        <ReadContent v-if="Read" :DiaryPath="ReadData" class="ReadContent"/>
    </div>
</template>

<script>
import ReadList from './List/List';
import ReadContent from './Content/Content';
export default {
    components:{ReadList,ReadContent},
    data(){
      return {
          ReadData:{},
          Read:false
      };
    },
    mounted(){
        this.$nextTick(function(){
            const editor = this.$el.children;
            this.$anime.timeline({
                easing: 'easeOutCirc',
                duration:1000
            })
            .add({
                targets:editor,
                opacity:[0,1],
            });
        });
        document.addEventListener('keydown',this.Back);
    },
    beforeDestroy(){
        document.removeEventListener('keydown',this.Back);
    },
    methods:{
        Back(e){
            if(e.keyCode==27){
                const editor = this.$el.children;
                let that=this;
                this.$anime.timeline({
                    easing: 'easeOutCirc',
                    duration:1000
                })
                .add({
                    targets:editor,
                    opacity:[1,0],
                    complete:function(ani){
                        if(ani.completed){
                            that.$emit('ChangeRead');
                        }
                    }
                });
            }
        },
        LoadingContent(data){
            this.ReadData=data;
            console.log(data);
            if(this.Read==false){
                this.Read=true;
            }
        }
    }
}
</script>

<style scoped>
.Read{
    background-color: #5699f0;
    height: 100vh;
    display: flex;
    font-family: 'KuaiLe';
}
.ReadList{
    width: 30%;
}
.ReadContent{
    width: 60%;
}
@font-face {
    font-family: 'KuaiLe';
    src: url('../ZCOOLKuaiLe-Regular.ttf');
}
</style>
