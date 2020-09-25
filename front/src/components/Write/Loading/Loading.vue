<template>
    <el-dialog
    title=""
    :visible.sync="visible"
    :custom-class="'WriteLoadingDialog'"
    width="20%"
    center
    :show-close="false"
    :before-close="close"
    top="30vh">
        <div class="Loading">
            <div v-if="!success&&!fail" ref="Ani" class="LoadingAni"></div>
            <img v-if="success" ref="Ani" class="LoadingFinish" src="@/assets/WriteSuccess.svg"/>
            <img v-if="fail" ref="Ani" class="LoadingFinish" src="@/assets/WriteError.svg"/>
        </div>
        <div class="LoadingText">{{text}}</div>
    </el-dialog>
</template>

<script>

export default {
    data(){
        return {
            text:'',
            finish:false,
            success:false,
            fail:false
        };
    },
    props:['visible','action'],
    methods:{
        close(){
            if(this.finish)this.$emit('close');
        },
        SuccessAnimate(){
            this.success=true;
            let that=this;
            this.$nextTick(function(){
                const target=that.$refs['Ani'];
                that.$anime({
                    duration:1000,
                    targets:target,
                    opacity:[0,1],
                    easing:'easeOutSine',
                });
            });
        },
        ErrorAnimate(){
            this.fail=true;
            let that=this;
            this.$nextTick(function(){
                const target=that.$refs['Ani'];
                that.$anime({
                    duration:1000,
                    targets:target,
                    opacity:[0,1],
                    easing:'easeOutSine',
                });
            });
        }
    },
    mounted(){
        let that=this;

        this.$nextTick(function(){
            const target=that.$refs['Ani'];
            that.$anime({
                endDelay: 250,
                duration:1000,
                targets:target,
                width:['0%','90%'],
                height:['0%','90%'],
                opacity:[1,0],
                easing:'easeOutSine',
                loop:true,
            });
        });

        this.action();
    }
}
</script>

<style scoped>
.Loading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 10em;
    margin-bottom: 2em;
}
.LoadingAni{
    border: 5px solid #d14d6e;
    border-radius: 50%;
}
.LoadingFinish{
    width: 10em;
    height: 10em;
}
.LoadingText{
    font-size: 1.5em;
    text-align: center;
}
</style>
<style>
.WriteLoadingDialog,.WriteLoadingDialog .el-dialog__title,.WriteLoadingDialog .el-dialog__body{
    background-color: #da6985;
    color: #ddabb7;
    user-select: none;
}
.WriteLoadingDialog .el-dialog__body{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
