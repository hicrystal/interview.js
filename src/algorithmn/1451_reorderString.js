var arrangeWords = function(text) {
    let textArr = text.toLowerCase().split(' ');
    textArr.sort((a, b) => {
        return a.length - b.length;
    });
    textArr[0] = textArr[0][0].toUpperCase().concat(textArr[0].slice(1,textArr[0].length));
    return textArr.join(' ');

};
// 总结，先排序，后解释；
console.log(arrangeWords('leet df dfs'));