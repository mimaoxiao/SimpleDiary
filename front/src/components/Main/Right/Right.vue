<template>
    <div @mouseenter="ShowTime()" @mouseleave="NotShow()" class="Content">
        <div @click="ToNew()" ref="Box" class="ContentBox">
            <img class="ContentIcon" src="@/assets/book.svg"/>
            阅读日记
        </div>
    </div>
</template>

<script>

export default {
    data(){
      return {};
    },
    props:['reverse'],
    mounted(){
        if(this.reverse=='right'){
            this.active=true;
            this.$nextTick(function(){
                let that=this;
                const targets = this.$refs.Box;
                const back = this.$el;
                this.$anime.timeline({
                    easing: 'easeOutCirc',
                    duration:750
                })
                .add({
                    targets:back,
                    duration:0,
                    backgroundColor:'#5699f0'
                })
                .add({
                    targets:targets,
                    opacity:[0,1],
                }).add({
                    targets:back,
                    width:['100%','50%'],
                    left:['0','50%'],
                    complete:function(ani){
                        if(ani.completed){
                            that.active=false;
                        }
                    }
                },0);
            })
        }
    },
    methods:{
        ShowTime(){
            const targets = this.$refs.Box;
            const back = this.$el;
            this.$anime.timeline({
                easing: 'easeOutCirc',
                duration:1000
            })
            .add({
                targets:targets,
                scale:1.5
            })
            .add({
                targets:back,
                backgroundColor:'#5699f0'
            },0);
        },
        NotShow(){
            const targets = this.$refs.Box;
            const back = this.$el;
            this.$anime.timeline({
                easing: 'easeOutCirc',
                duration:1000
            })
            .add({
                targets:targets,
                scale:1,
            })
            .add({
                targets:back,
                backgroundColor:'#84b0e9'
            },0);
        },
        ToNew(){
            this.active=true;
            const targets = this.$refs.Box;
            const back = this.$el;
            let that=this;
            this.$anime.timeline({
                easing: 'easeOutCirc',
                duration:750
            })
            .add({
                targets:targets,
                opacity:0,
            }).add({
                targets:back,
                left:'0',
                width:'100%',
                complete:function(ani){
                    if(ani.completed){
                        that.$emit('ChangeRead');
                    }
                }
            },0);
        }
    }
}
</script>

<style scoped>
.Content{
    background-color: #84b0e9;
    color: white;
    letter-spacing: 4px;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
}
.ContentIcon{
    width: 5em;
    height: 5em;
    display: block;
}
.ContentBox{
    text-align: center;
    cursor: pointer;
    user-select: none;
}
</style>
