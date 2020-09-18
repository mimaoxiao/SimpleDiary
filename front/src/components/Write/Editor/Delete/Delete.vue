<template>
    <el-dialog
    title="真的要删除吗"
    :visible.sync="visible"
    :custom-class="'WriteDeleteDialog'"
    width="30%"
    center
    :show-close="false"
    :before-close="close"
    top="30vh">
        <div class="Delete">
            <div ref="yes" class="DeleteYes" @mousedown="showclick('yes')" @mouseup="backclick('yes')" @mouseenter="showin('yes')" @mouseleave="backin('yes')">是</div>
            <div class="DeleteContent">被删除的文件将被移动到回收文件夹</div>
            <div ref="no" class="DeleteNo" @mousedown="showclick('no')" @mouseup="backclick('no')" @mouseenter="showin('no')" @mouseleave="backin('no')">否</div>
        </div>
    </el-dialog>
</template>

<script>

export default {
    data(){
        return {
        };
    },
    props:['visible'],
    methods:{
        close(){
            this.$emit('close');
        },
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
                backgroundColor:'#326bb6'
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
    }
}
</script>

<style scoped>
.Delete{
    display: flex;
    border: 5px solid #d14d6e;
}
.DeleteContent{
    flex-grow: 1;
    padding: 1em;
    text-align: center;
}
.DeleteYes,.DeleteNo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1em;
}
.DeleteYes{
    border-right: 5px solid #d14d6e;
    background-color: #da6985;
    cursor: pointer;
}
.DeleteNo{
    border-left: 5px solid #d14d6e;
    background-color: #da6985;
    cursor: pointer;
}
</style>
<style>
.WriteDeleteDialog,.WriteDeleteDialog .el-dialog__title,.WriteDeleteDialog .el-dialog__body{
    background-color: #da6985;
    color: #ddabb7;
    user-select: none;
}
</style>
