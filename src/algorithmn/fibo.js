function fibo(n) {
	/** 
	 * list  0 1 1 2 3 5 
	 * index 0 1 2 3 4 5
	 * 思路：将本次的结果作为下一次的参数，a->b,b->c, 得到下一个c，
	 * 最后必须循环n-2次（所以循环条件是<=的包含关系），才能结束
	 * 边界条件注意：在第0个和第1个，都等于其本身，第2个的时候，也等于1；
	 * 此外如果n的判断没有包含最后一次n本身，那么循环就会少计算一次。（这也是我这次的错误点）
	 * 
	 * */ 
	let a = 0,
		b = 1,
		c = 0;
	switch (n) {
		case 0:
			c = 0;

			break;
		case 1:
			c = 1;

			break;
		case 2:
			c = 1;

			break;

		default:
			for (let index = 2; index <= n; index++) {
				c = a + b;
				a = b;
				b = c;

			}
			break;
	}
	return c;
}

console.log(fibo(39));