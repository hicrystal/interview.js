/**Bubble sort
 * 当为正序时最快 反序最慢 复杂度为O(n²)
 * */
function bubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) { //相邻元素两两对比
				var temp = arr[j + 1]; //元素交换
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
/**
 * Selection sort
 * 
 **/
function selectionSort(arr) {
	var len = arr.length;
	var minIndex, temp;
	for (var i = 0; i < len - 1; i++) {
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) { //寻找最小的数
				minIndex = j; //将最小数的索引保存
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp; //找出索引后 交换两个数
	}
	return arr;
}

/**	
 * 插入排序（Insertion Sort）
 * 
 */
function insertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for (var i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}

/**	
 *  希尔排序（Shell Sort）
 * 动态定义间隔序列的算法
 * 希尔排序的核心在于间隔序列的设定 可以定量 也可以动态
 * 
 */
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
			arr[j+gap] = temp;
			//在组内实行插入排序 然后不断减小间隔
        }
    }
    return arr;
}

function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
/**
 * 归并排序 分而治之 需要额外的内存空间
 */


function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}