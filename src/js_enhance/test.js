let MyPromise = require('./promise_es6');

//use A+ standard to test
MyPromise.deferred = function () {
	const defer = {}
	defer.promise = new MyPromise((resolve, reject) => {
		defer.resolve = resolve
		defer.reject = reject
	})
	return defer
}

try {
	module.exports = MyPromise
} catch (e) {}