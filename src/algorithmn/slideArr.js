function maxInWindows(num, size)
{
    const length = num.length;
	const maxNumArr = [];
	let maxNum;
    if(length && length !== 0){
        for(var i = 0; i<length-size+1;i++){
            const newArr = num.slice(i, i+size);         
            maxNum = Math.max.apply(null,newArr);
            maxNumArr.push(maxNum);	
        }
         return maxNumArr;
    }else {
        return [];
    }
   
   
    // write code here
}

console.log(maxInWindows([10,14,12,11],0));
