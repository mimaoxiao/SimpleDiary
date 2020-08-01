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
    mounted(){

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
