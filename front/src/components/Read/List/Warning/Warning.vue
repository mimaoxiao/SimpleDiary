<template>
    <el-dialog
    title=""
    :visible.sync="visible"
    :custom-class="'ReadWarningDialog'"
    width="20%"
    center
    :show-close="false"
    :before-close="close"
    top="30vh">
        <div class="Warning">
            <img ref="Ani" class="WarningFinish" src="@/assets/ReadError.svg"/>
        </div>
        <div class="WarningText">{{text}}</div>
    </el-dialog>
</template>

<script>

export default {
    data(){
        return {
            
        };
    },
    props:['visible','text'],
    methods:{
        close(){
            this.$emit('close');
        },
    },
}
</script>

<style scoped>
.Warning{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 10em;
    margin-bottom: 2em;
}
.WarningAni{
    border: 5px solid #3c80da;
    border-radius: 50%;
}
.WarningFinish{
    width: 10em;
    height: 10em;
}
.WarningText{
    font-size: 1.5em;
    text-align: center;
}
</style>
<style>
.ReadWarningDialog,.ReadWarningDialog .el-dialog__title,.ReadWarningDialog .el-dialog__body{
    background-color: #5699f0;
    color: #74b0ff;
    user-select: none;
}
.ReadWarningDialog .el-dialog__body{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
