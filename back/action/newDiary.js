const { throws } = require('assert');
const fs=require('fs');
module.exports=function(data){
    const array=data.data;
    const now=new Date();
    let year=String(now.getFullYear());
    let month=String(now.getMonth()+1);
    let day=String(now.getDay()+1);
    let hour=String(now.getHours());
    let minute=String(now.getMinutes());
    
    if(hour.length==1)hour='0'+hour;
    if(day.length==1)day='0'+day;
    if(month.length==1)month='0'+month;

    let dir='./diary';
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir+='/'+year;
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir+='/'+month;
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir+='/'+day;
    if(!fs.existsSync(dir))fs.mkdirSync(dir);dir+='/'+hour+minute;
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    else{
        throw new Error('试图创建一个已存在的日记');
    }
    dir+='/';

    for(let i=0;i<array.length;i++){
        if(array[i].type=='text'){
            fs.writeFileSync(dir+i+'.meow',array[i].content);
        }
    }
}