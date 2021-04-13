var findRepeatNumber = function(nums) {
    if (nums.length <=1) return;
    for(let i = 0;i <=nums.length;i++){
        if(nums[i] === i) {
            continue;
        }else {   
            let temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp; 
        }
        if(nums[i] === nums[nums[i]]){
            return nums[i];
        }
    }
    return false;

};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));