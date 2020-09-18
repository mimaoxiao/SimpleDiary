<template>
    <div>
        <MainLeft @ChangeWrite="ChangeWrite" :reverse="reverse" class="Left"/>
        <MainRight @ChangeRead="ChangeRead" :reverse="reverse" class="Right"/>
    </div>
</template>

<script>
import MainLeft from './Left/Left';
import MainRight from './Right/Right';
export default {
    components:{MainLeft,MainRight},
    data(){
      return {};
    },
    props:['reverse'],
	methods:{
		ChangeWrite(){
			this.$emit('ChangeWrite');
        },
		ChangeRead(){
			this.$emit('ChangeRead');
        },
	}
}
</script>

<style scoped>
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
