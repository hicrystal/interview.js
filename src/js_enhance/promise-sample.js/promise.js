const promise = new Promise(function(resolve,reject){
    //resolve(100);
    reject(new Error('this is your fault!'));
});
promise.then(function(value){
    console.log('resolved' +  value);
},function(error){
    console.log('rejected'+error);
})