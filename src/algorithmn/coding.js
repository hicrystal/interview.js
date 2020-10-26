
function uniqueChar(str) {
    
    let left = 0; let right = 1;
    const l = str.length;
    const strArr = str.split('');
    // if str.length < 0; return s;
    // if s[left] == s[right]; break 
    // if s[left] !==s[right] for every single char, return the char;
    // if no such char ,return false;
    if(strArr.length <= 0) return str;
    while(left < strArr.length && right< strArr.length) {
        if(strArr[left]==strArr[right]){
            left++;
            continue;   
        }else {
            right++;
        }
        if(strArr[left]!==strArr[right] && right<strArr.length) {
            return strArr[left];
        }
       
    }
    return false;

}
console.log(uniqueChar('adad'));