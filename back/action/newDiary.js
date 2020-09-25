const fs=require('fs');
const path=require('path');

module.exports=function(data){
    const array=data.data;
    const now=new Date();
    let year=String(now.getFullYear());
    let month=String(now.getMonth()+1);
    let day=String(now.getDate()+1);
    let hour=String(now.getHours());
    let minute=String(now.getMinutes());
    let second=String(now.getSeconds());

    if(second.length==1)second='0'+second;
    if(minute.length==1)minute='0'+minute;
    if(hour.length==1)hour='0'+hour;
    if(day.length==1)day='0'+day;
    if(month.length==1)month='0'+month;

    let dir='./diary';
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir=path.join(dir,year);
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir=path.join(dir,month);
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir=path.join(dir,day);
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir=path.join(dir,hour+minute+second);
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    else{
        throw new Error('试图创建一个已存在的日记');
    }

    for(let i=0;i<array.length;i++){
        if(array[i].type=='text'){
            fs.writeFileSync(path.join(dir,i+'.meow'),array[i].content);
        }
    }
}