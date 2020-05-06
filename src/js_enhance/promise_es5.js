(function (window) {
	/**
	 * promise 构造
	 * @param {} excutor 
	 */
	function Promise(excutor) {
		var status = '';
		var PENDING = 'pending';
		var fulfilled = 'fulfilled';
		var reject =  ''

	}
	/**
	 * Promise.then(),return new promise
	 * @param onFufiled is a funcion when status pending turn into fufiled
	 * @param onRejected is a funcion  when pending turn rejected 
	 */
	Promise.prototype.then = function (onFufiled, onRejected) {

	}
	/**
	 * Promise.catch(),return new promise
	 */
	Promise.prototype.catch = function (onRejected) {

	}
	/**
	 * Promise.resolve()
	 * status to fufiled and get a value;
	 */
	Promise.resolve = function (value) {

	}

	/**
		 * Promise.reject()
		 * pending turn rejected and get a params reason
		 */
		Promise.reject = function (reason) {

		}
	/** 
	 * @param promises means serveral promise run together ,all of them return to fufiled
	 * */

	Promise.all = function (promises) {

	}
	/** .race()
	 * @param promises means serveral promise run together ,one of them return to fufiled
	 * */

	Promise.race = function (promises) {

	}


	window.Promise = Promise;
})(window)