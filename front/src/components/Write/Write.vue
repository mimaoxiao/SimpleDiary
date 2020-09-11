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

    },
    methods:{

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
