Function.prototype.call2 = function(context){
	context = context || window;
	context.fn =  this;
	var arg =[];
	for (let index = 1; index < arguments.length; index++) {
		// 这里arg= [arguments[i]];
		arg.push('arguments[' + index + ']');
	}
	//类型准换会自动Array.toString() 转化成string 即传入的参数
	var result = eval('context.fn(' + arg +')');
	delete context.fn;
	return result;
}

function food(){
	this.value = "a";
	bar.call2(this,33);
}

function bar(num) {
	console.log(this.value);
	console.log(num);
	return num;
}

food();