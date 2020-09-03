
function caculate(n){
	let arr = [];
	if(!n)return arr;
	for(let i = 2;i<=n;i++){
		
		let j=2;

		while(i>=j){
		 // i&j==0 
			if(i%j==0 && i==j){
				arr.push(i);
			}
			if(i%j==0 && i!==j){
				
				break;
			}
			j++;
			
		
		}
	}
	return arr;
}
console.log(caculate(10));