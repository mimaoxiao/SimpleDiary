<template>
    <div class="Content">
        <MainLeft v-if="write" @ChangeWrite="ChangeWrite" class="Left"/>
        <MainRight v-if="write" class="Right"/>
		<Write v-if="write" class="Action"/>
		<Read class="Action"/>
    </div>
</template>

<script>
import MainLeft from './components/Main/Left/Left';
import MainRight from './components/Main/Right/Right';
import Write from './components/Write/Write';
import Read from './components/Read/Read';
export default {
    components:{MainLeft,MainRight,Write,Read},
    data(){
		return {
			read:false,
			write:false
		};
	},
	methods:{
		ChangeWrite(){
			this.write=!this.write;
		}
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
.Main{
	z-index: 1;
}
.Action{
	z-index: 2;
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
