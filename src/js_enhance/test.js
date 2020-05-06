const MyPromise = require('./promise_es6');
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