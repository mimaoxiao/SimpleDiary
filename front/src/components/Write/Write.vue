<template>
    <div class="Write">
        <WriteEditor class="WriteEditor"/>
        <WritePicture class="WritePicture"/>
    </div>
</template>

<script>
import WriteEditor from './Editor/Editor.vue';
import WritePicture from './Picture/Picture.vue';
export default {
    data(){
      return {};
    },
    components:{WriteEditor,WritePicture},
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
                            that.$emit('ChangeWrite');
                        }
                    }
                });
            }
        }
    }
}
</script>

<style scoped>
.Write{
    background-color: #da6985;
    height: 100vh;
    display: flex;
    font-family: 'KuaiLe';
}
.WriteEditor{
    width: 50%;
}
.WritePicture{
    width: 50%;
}
@font-face {
    font-family: 'KuaiLe';
    src: url('../ZCOOLKuaiLe-Regular.ttf');
}
</style>
