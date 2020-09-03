Function.prototype.bindNew= function(){
	let self = this;
	//Array.prototype.slice.call(arguments, 1) == arguments.slice(1);
	let target = arguments[0];
	let arg = Array.prototype.slice.call(arguments, 1);
	if(!self instanceof Function) throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	else{
	var bindFn = function(){
			// 这个时候的arguments是指bind返回的函数传入的参数,并把他们变成数组
			var bindArgs = Array.prototype.slice.call(arguments);
			return self.apply(target, arg.concat(bindArgs));
	   }
	   return bindFn;
	}
}
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
	this.habit = 'shopping';
	console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo(18);
console.log(obj.value);
