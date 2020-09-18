import axios from 'axios';
export default {
    newDiary:function(data,success,fail){
        axios.post('http://localhost:9156/meow', {
			data
		})
		.then(function (response) {
			console.log(response);
			success(response);
		})
		.catch(function (error) {
			console.log(error);
			fail(error);
		});
    }
}