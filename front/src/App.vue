<template>
    <div class="Content">
        <MainLeft class="Left"/>
        <MainRight class="Right"/>
    </div>
</template>

<script>
import MainLeft from './components/Left/Left';
import MainRight from './components/Right/Right';
export default {
    components:{MainLeft,MainRight},
    data(){
      return {};
    }
}
</script>
	
<style scoped>
.Content{
    height:100vh;
}
.Left{
    width: 50%;
    position: absolute;
}
.Right{
    position: absolute;
    width: 50%;
    left:50%;
}
</style>
<style>
body{
  margin:0;
  font-family: 'HuangYou';
}
@font-face {
  font-family: 'HuangYou';
  src: url('./HuangYou-Regular.ttf');
}
</style>
