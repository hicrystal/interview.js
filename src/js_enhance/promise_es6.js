'use strict'
const PENDING = "pending",
	FUFILED = 'fufiled',
	REJECTED = 'rejected';

class Promise {
	constructor(excutor) {
		this.value = null;
		this.reason = null;
		this.status = PENDING;
		//用来解决异步问题的数组
		this.onFullfilledArray = [];
		this.onRejectedArray = [];
		if (typeof excutor !== 'function')
			throw new TypeError(`${excutor} is not a funtion`)
		else {
			excutor(this.resolve.bind(this), this.reject.bind(this));
		}
	}

	resolve(value) {
		if (this.status === PENDING) {
			setTimeout(() => {
				this.status = FUFILED;
				this.value = value;
				this.onFullfilledArray.forEach(f => f(value));
			})
		}

	}
	reject(reason) {
		if (this.status === PENDING) {
			setTimeout(() => {
				this.status = REJECTED;
				this.reason = reason;
				this.onRejectedArray.forEach(f => f(reason));
				this.status = REJECTED;
			})
		}
	}
	then(onfufiled, onRejected) {
		onfufiled = typeof onfufiled !== 'function' ? (value) => value : onfufiled;
		onRejected = typeof onRejected !== 'function' ? (reason) => {
			throw reason
		} : onRejected;
		let promise2;
		switch (this.status) {
			case PENDING:
				return promise2 = new Promise((resovle, reject) => {
					this.onFullfilledArray.push((value) => {
						onfufiled(value);
					})
					this.onRejectedArray.push((reason) => {
						onRejected(reason);
					})
				});
				break;
			case FUFILED:
				return promise2 = new Promise((resovle, reject) => {
					setTimeout(() => {
						onfufiled(this.value);
					})
				})

				break;
			case REJECTED:
				return promise2 = new Promise((resovle, reject) => {
					setTimeout(() => {
						onRejected(this.reason);
					})
				})
		}
	}

}

function resolvePromise(promise2, x, resolve, reject) {

	// 循环引用报错
	if (x === promise2) {
		// reject报错
		return reject(new TypeError('Chaining cycle detected for promise'));
	}
	// 防止多次调用
	let called;
	// x不是null 且x是对象或者函数
	if (x != null && (typeof x === 'object' || typeof x === 'function')) {
		try {
			// A+规定，声明then = x的then方法
			let then = x.then;
			// 如果then是函数，就默认是promise了
			if (typeof then === 'function') {
				// 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
				then.call(x, y => {
					// 成功和失败只能调用一个
					if (called) return;
					called = true;
					// resolve的结果依旧是promise 那就继续解析
					resolvePromise(promise2, y, resolve, reject);
				}, err => {
					// 成功和失败只能调用一个
					if (called) return;
					called = true;
					reject(err); // 失败了就失败了
				})
			} else {
				resolve(x); // 直接成功即可
			}
		} catch (e) {
			// 也属于失败
			if (called) return;
			called = true;
			// 取then出错了那就不要在继续执行了
			reject(e);
		}
	} else {
		resolve(x);
	}
}
Promise.resolve = function (val) {
	return new Promise((resolve, reject) => {
		resolve(val)
	});
}
Promise.reject = function (val) {
	return new Promise((resolve, reject) => {
		reject(val)
	});
}
Promise.all = function (promises) {
	let arr = [];
	let i = 0;
	function processData(index, data, resolve) {
		arr[index] = data;
		i++;
		if (i == promises.length) {
			resolve(arr);
		};
	};
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			promises[i].then(data => {
				processData(i, data ,resolve);
			}, reject);
		};
	});

}
module.exports = Promise;