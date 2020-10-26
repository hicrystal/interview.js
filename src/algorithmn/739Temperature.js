/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let waitArr = [];
    if(T.length<=1)return [0];
    let curr = 0, right = 1,wait=1;
    while(curr<T.length || right < T.length){
        if(T[curr]<T[right]){
            waitArr[curr] = wait;
            curr++;
            right++;
            wait = 1;
            continue;
        }else {
            right++;
            wait++;
        }
        if(right === T.length){
            if(wait!==0) {
                wait = 0;       
            waitArr[curr] = wait;                
            }
        }
        
    }
    return waitArr;

};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));