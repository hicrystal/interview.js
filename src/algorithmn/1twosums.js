var twoSum = function(nums, target) {
    if (nums.length < 2) return[];
    let contain = new Map();
    let targetArr = [];
    //set hash 

    for(let j = 0; j<nums.length; j++){
        let temp = target - nums[j];
        if(contain.has(temp)){
            return [contain.get(temp),j];
        }else {
            contain.set(nums[j],j);
        } 
    }
   
};

  
console.log(twoSum([3,3,6],6));
