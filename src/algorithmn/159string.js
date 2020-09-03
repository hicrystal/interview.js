/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    /**
     * 1.用map来自定义，key:word key(a), value 为 当前当前的字符位置
     * 2.left和right分别为两个指针分别指向当前两个字符串的指针
     * 3.先移动right，并不断的push当前字符的位置
     * 4.当map的size>3的时候，删除字符里面位置最先进来的位置，并且更新left的位置到删除位置后面一位。）---注意的点
     * 5.每次都更新 maxLength
     * 6.返回maxLength
     */
    if(s.length<3) return s.length;
    let newMap = new Map();//map 用来寄存每个字符的位置
    let left = 0, right = 0;
    let maxLength = 2;
    const n = s.length;
    while(right<n){
        if(newMap.size < 3){
            newMap.set(s[right],right);
            right++;
            }
        if(newMap.size===3){
            let a = newMap.values();
            let leftIndex = Math.min(...a);//取左边最小值
            newMap.delete(s[leftIndex]);//删除最左边
            left = leftIndex + 1;         
        }
        maxLength = Math.max(right-left,maxLength);
    }
    return maxLength;

};

console.log(lengthOfLongestSubstringTwoDistinct("abc"));
