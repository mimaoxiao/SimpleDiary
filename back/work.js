var querystring = require('querystring');
const newDiary=require('./action/newDiary');

function test(request,response){
    let postdata='';
    request.addListener('data',function(data){
        postdata+=data;
    });
    request.addListener('end',function(){
        let returndata;
        try {
            newDiary(JSON.parse(postdata));
            returndata={'msg':'创建完成'};
        } catch (error) {
            console.log(error);
            returndata=error;
        } finally{
            response.write(JSON.stringify(returndata));
        }
        response.end();
    });
}

var list={};
list['/meow']=test;

exports.list=list;