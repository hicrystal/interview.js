const Promise = require ('./promise_es6');
new Promise((resolve, reject)=>{
	console.log('success');
	resolve(1);
})