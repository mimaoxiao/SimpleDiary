const fs=require('fs');
const path=require('path');
const diaryPath='./diary';

module.exports=function(data){
    let year=data.year,month=data.month,day=data.day,time=data.hour+data.minute+data.second;
    let dir=path.join(diaryPath,year,month,day,time);
    let array=fs.readdirSync(dir);
    let result=[];
    for(let i=0;i<array.length;i++){
        result.push({type:'text'})
        result[i].content=fs.readFileSync(path.join(dir,array[i]),"utf-8");
    }
    return result;
}