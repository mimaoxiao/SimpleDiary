<template>
    <div @mouseenter="ShowTime()" @mouseleave="NotShow()" :class="active?'Content ContentActive':'Content'">
        <div @click="ToNew()" ref="Box" class="ContentBox">
            <img class="ContentIcon" src="@/assets/create.svg"/>
            新的日记
        </div>
    </div>
</template>

<script>

export default {
    data(){
      return {
          active:false
      };
    },
    props:['reverse'],
    mounted(){
        if(this.reverse=='left'){
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
                    backgroundColor:'#da6985'
                })
                .add({
                    targets:targets,
                    opacity:[0,1],
                },0)
                .add({
                    targets:back,
                    width:['100%','50%'],
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
                backgroundColor:'#da6985'
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
                backgroundColor:'#dd849a'
            },0);
        },
        ToNew(){
            this.active=true;
            let that=this;
            const targets = this.$refs.Box;
            const back = this.$el;
            this.$anime.timeline({
                easing: 'easeOutCirc',
                duration:750
            })
            .add({
                targets:targets,
                opacity:0,
            }).add({
                targets:back,
                width:'100%',
                complete:function(ani){
                    if(ani.completed){
                        that.$emit('ChangeWrite');
                    }
                }
            },0);
        }
    }
}
</script>

<style scoped>
.Content{
    background-color: #dd849a;
    color: white;
    letter-spacing: 4px;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
}
.ContentActive{
    z-index: 2;
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
