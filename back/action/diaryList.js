const fs=require('fs');
const path=require('path');

const diaryPath='./diary';

module.exports=function(){
    let dirArray=fs.readdirSync(diaryPath);

    let temp=[];
    for(let time=0;time<3;time++){
        let length=dirArray.length;
        for(let i=0;i<length;i++){
            let now=dirArray.shift();
        
            let nowsplit=now.split('-');
            let dir=diaryPath;
            for(let j=0;j<nowsplit.length;j++){
                dir=path.join(dir,nowsplit[j]);
            }
        
            let result=fs.readdirSync(dir);
    
            for(let j=0;j<result.length;j++){
                result[j]=now+'-'+result[j];
            }
            
            temp=temp.concat(result);
        }
        dirArray=temp;
        temp=[];
    }
    return dirArray;
}