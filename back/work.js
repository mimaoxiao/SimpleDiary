var querystring = require('querystring');
const newDiary=require('./action/newDiary');
const diaryList=require('./action/diaryList');
const readDiary=require('./action/readDiary');

function doDiaryList(request,response){
    let returndata;
    try {
        returndata={
            data:diaryList(),
            msg:'查询完成',
            status:'success'
        };
    } catch (error) {
        console.log(error);
        returndata={
            status:'fail',
            msg:'查询失败',
            error
        };
    } finally{
        response.write(JSON.stringify(returndata));
        response.end();
    }
}

function doNewDiary(request,response){
    let postdata='';
    request.addListener('data',function(data){
        postdata+=data;
    });
    request.addListener('end',function(){
        let returndata;
        try {
            newDiary(JSON.parse(postdata));
            returndata={
                status:'success',
                msg:'创建完成'
            };
        } catch (error) {
            console.log(error);
            returndata={
                status:'fail',
                msg:'创建失败',
                error
            };
        } finally{
            response.write(JSON.stringify(returndata));
            response.end();
        }
    });
}

function doReadDiary(request,response){
    let postdata='';
    request.addListener('data',function(data){
        postdata+=data;
    });
    request.addListener('end',function(){
        let returndata;
        try {
            returndata={
                status:'success',
                msg:'读取完成'
            };
            returndata.data=readDiary(JSON.parse(postdata).data);
        } catch (error) {
            console.log(error);
            returndata={
                status:'fail',
                msg:'读取失败',
                error
            };
        } finally{
            response.write(JSON.stringify(returndata));
            response.end();
        }
    });
}

var list={};
list['/diarylist']=doDiaryList;
list['/newdiary']=doNewDiary;
list['/readdiary']=doReadDiary;

exports.list=list;