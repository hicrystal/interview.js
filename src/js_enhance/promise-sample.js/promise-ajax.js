function ajax(url) {
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        xhr.send()
    })
}
ajax('.').then(function(res){
    console.log(res);
},function(err){
    console.log(err);
});