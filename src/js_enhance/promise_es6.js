'use strict'
const PENDING ="pending", FUFILED = 'fufiled', REJECTED = 'rejected';

class Promise {
	constructor(excutor){
		this.value = null;
		this.reason = null;
		this.status = PENDING;
		 //用来解决异步问题的数组
		 that.onFullfilledArray = [];
		 that.onRejectedArray = [];
		if(typeof excutor !=='function')
		throw new TypeError(`${excutor} is not a funtion`)
		else {		
			excutor(this.resovle.bind(this), this.reject.bind(this));
		}
	}

	then(onfufiled, onRejected){
		if(typeof onfufiled !== 'function'){
			onfufiled = function(value){
				this.value = value;
				return value;
			}
		}
		if(typeof onRejected !== 'function'){
			onRejected = function(reason){
				return reason;
			}
		}
		if(this.status === FUFILED){
			setTimeout(()=>{
				onfufiled(value);
			})
			
		}
		if(this.status === REJECTED){
			setTimeout(()=>{
				onRejected(reason);
			})
			
		}
		
	}
	resovle(value){
		this.status =  FUFILED;
		this.value = value;	
	}
	reject(reason){
		this.status =  REJECTED;
		this.reason = reason;

	}

}
module.exports = Promise;