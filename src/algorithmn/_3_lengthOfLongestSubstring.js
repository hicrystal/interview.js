var lengthOfLongestSubstring = function (s) {
    let left = 0, right = 0;// two pointer
    let maxLength = 0;
    let length = s.length;
    let stringMap = new Map();
    if (length < 1) return 0;
    while (right<length) {
        if (!stringMap.has(s.charCodeAt(right))) {
            stringMap.set(s.charCodeAt(right), right);
        } else {
            //重新开始计算
            stringMap.clear();
            right = left+1;
            left++;
            stringMap.set(s.charCodeAt(right), right);
        }
        right++;
        maxLength = Math.max(right-left,maxLength);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcadfefbcbb"));