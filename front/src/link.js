import axios from 'axios';
const Server='http://localhost:9156/';
export default {
    newDiary:function(data,success,fail){
        axios.post(Server+'newdiary')
		.then(function (response) {
			console.log(response);
			success(response);
		})
		.catch(function (error) {
			console.log(error);
			fail(error);
		});
	},
	diaryList:function(data,success,fail){
        axios.post(Server+'diarylist', {
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
	},
	readDiary:function(data,success,fail){
        axios.post(Server+'readdiary', {
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