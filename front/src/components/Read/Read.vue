<template>
    <div class="Read">
        <ReadList class="ReadList"/>
        <ReadContent class="ReadContent"/>
    </div>
</template>

<script>
import ReadList from './List/List';
import ReadContent from './Content/Content';
export default {
    components:{ReadList,ReadContent},
    data(){
      return {};
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
    width: 70%;
}
@font-face {
    font-family: 'KuaiLe';
    src: url('../ZCOOLKuaiLe-Regular.ttf');
}
</style>
