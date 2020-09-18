<template>
    <el-dialog
    title="编辑"
    :visible.sync="visible"
    :custom-class="'ReadEditDialog'"
    width="30%"
    center
    :show-close="false"
    :before-close="close"
    top="30vh">
        <div class="Edit">
			<div class="EditContent">
				<textarea class="EditInput"/>
			</div>
			<div class="EditButton">
				<div ref="yes" class="EditYes" @mousedown="showclick('yes')" @mouseup="backclick('yes')" @mouseenter="showin('yes')" @mouseleave="backin('yes')">是</div>
				<div ref="no" class="EditNo" @mousedown="showclick('no')" @mouseup="backclick('no')" @mouseenter="showin('no')" @mouseleave="backin('no')">否</div>
			</div>
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
                backgroundColor:'#3c80da'
            })
        },
        backin(aim){
            let target=this.$refs[aim];
            this.$anime({
                easing: 'easeOutCirc',
                duration:500,
                targets:target,
                backgroundColor:'#5699f0'
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
                backgroundColor:'#3c80da'
            })         
        },
    }
}
</script>

<style scoped>
.Edit{
    display: flex;
	flex-direction: column;
    border: 5px solid #3c80da;
}
.EditContent{
    flex-grow: 1;
    padding: 1em;
    text-align: center;
	border: 5px solid #3c80da;
}
.EditInput{
	width: 100%;
	height: 100%;
	border: none;
	background-color: #5699f0;
	color: #97c4ff;
	resize: none;
}
.EditButton{
	border: 5px solid #3c80da;
	display: flex;
}
.EditYes,.EditNo{
	flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1em;
}
.EditYes{
    border-right: 5px solid #3c80da;
    background-color: #5699f0;
    cursor: pointer;
}
.EditNo{
    border-left: 5px solid #3c80da;
    background-color: #5699f0;
    cursor: pointer;
}
</style>
<style>
.ReadEditDialog,.ReadEditDialog .el-dialog__title,.ReadEditDialog .el-dialog__body{
    background-color: #5699f0;
    color: #97c4ff;
    user-select: none;
}
</style>
