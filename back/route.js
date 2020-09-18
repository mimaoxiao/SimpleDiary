var work=require('./work');

function route(pathname,request,response){

    if(typeof work.list[pathname] == 'function'){
        console.log('route'+pathname);
        work.list[pathname](request,response);
    }
}

exports.route=route;