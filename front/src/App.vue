<template>
    <div class="Content">
		<Main @ChangeWrite="ChangeWrite" @ChangeRead="ChangeRead" v-if="!(read||write)" class="Main" :reverse="reverse"/>
		<Write class="Action" v-if="write" @ChangeWrite="ChangeWrite"/>
		<Read class="Action" v-if="read" @ChangeRead="ChangeRead"/>
    </div>
</template>

<script>
import Main from './components/Main/Main';
import Write from './components/Write/Write';
import Read from './components/Read/Read';
export default {
    components:{Main,Write,Read},
    data(){
		return {
			read:false,
			write:false,
			reverse:false
		};
	},
	methods:{
		ChangeWrite(){
			this.write=!this.write;
			if(this.write==false)this.reverse='left';
		},
		ChangeRead(){
			this.read=!this.read;
			if(this.read==false)this.reverse='right';
		}
	},
	mounted(){
		
	}
}
</script>
	
<style scoped>
.Content{
    height:100vh;
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
