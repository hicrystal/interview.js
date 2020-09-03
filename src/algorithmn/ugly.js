function GetUglyNumber_Solution(index)
{
    let arrlist = [1];
    let twoPointer = 0,threePoint = 0, FivePointer = 0;
    for(let i =0; i<index;i++){
        let min = Math.min(2*arrlist[twoPointer], 3*arrlist[threePoint], 5*arrlist[FivePointer]);
        arrlist.push(min);
        if(min === 2*arrlist[twoPointer]){
            twoPointer+=1;
        }
        if(min === 3*arrlist[threePoint]){
            threePoint++;
        }
        if(min === 5*arrlist[FivePointer]){
            FivePointer++;
        }  
    }
	return arrlist[index-1];
}
console.log(GetUglyNumber_Solution(200));