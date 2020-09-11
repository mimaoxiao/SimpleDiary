<template>
    <div class="Read">
        <ReadList class="ReadList"/>
        <ReadContent class="ReadContent"/>
    </div>
</template>

<script>
import ReadList from './List/List';
import ReadContent from './Content/Content';
export default {
    components:{ReadList,ReadContent},
    data(){
      return {};
    }
}
</script>

<style scoped>
.Read{
    background-color: #5699f0;
    height: 100vh;
    display: flex;
    font-family: 'KuaiLe';
}
.ReadList{
    width: 30%;
}
.ReadContent{
    width: 70%;
}
@font-face {
    font-family: 'KuaiLe';
    src: url('../ZCOOLKuaiLe-Regular.ttf');
}
</style>
