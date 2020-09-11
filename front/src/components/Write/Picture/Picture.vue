<template>
    <div class="WritePicture">
        <div class="WritePictureTitle">图片列表</div>
        <div class="WritePictureShow">
            <div ref="upload" class="WritePictureUpload" @mousedown="showclick('upload')" @mouseup="backclick('upload')" @mouseenter="showin('upload')" @mouseleave="backin('upload')">
                <img class="WritePictureUploadPic" src="@/assets/add.svg">
                上传
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
      return {};
    },
    methods:{
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
                backgroundColor:'#a53e58'
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
        }
    }
}
</script>

<style scoped>
.WritePicture{
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 2em;
    margin-bottom: 2em;

    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.WritePictureTitle{
    color:#ddabb7;
    font-size: 3em;
    text-align: center;
}
.WritePictureShow{
    display: flex;
    flex-wrap: wrap;
}
.WritePictureUpload{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 10em;
    margin-right: 1em;
    margin-bottom: 1em;
    border: 5px solid #d14d6e;
    cursor: pointer;
    color:#ddabb7;
    background-color: #da6985;
}
.WritePictureUploadPic{
    width: 2em;
    height: 2em;
}
</style>
