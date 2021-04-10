function getUrl(url){
    return new Promise((resolve,reject)=>{
        var req = new XMLHttpRequest();
        req.open('GET',url,true);
        req.onload = function(){
            if(req.status===200){
                resolve(req.responseText)
            }else {
                reject(new Error(req.statusText))
            }
        }
        req.onerror = function(){
            reject(new Error(req.statusText))
        }
        req.send();
    })
}
var url = 'http://httpbin.org/status/500';
getUrl(url).then(res => {
    console.log( res)
}).catch(err => {
    console.log(err)
})


// Promise.resolve(42);

// new Promise(resolve=>{
//     resolve(42)
// })


//将thenable对象转换Promise对象
var promise =Promise.resolve($.ajax('/json/comment.json'));

promise.then(res=>{
    console.log(res);
})
