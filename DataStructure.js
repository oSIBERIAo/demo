//计数排序
var s = [0,1,2,5,2,7,1,6,8,23,6,0,0,0]
var CountingSort = function(arr) {
  var index = 0
  var hash = []
  while (index < arr.length) {
    number = arr[index]
    if (hash[number]){
      hash[number] = hash[number] + 1
      console.log('hash[number]',hash)
    }
    if (hash[number] == undefined) {
      hash[number] = 1
      console.log('undefined', hash)
    }
    index = index + 1
  }
  console.log('hash',hash)
  var index2 = 0
  var max = hash.length
  var newArr = []
  while (index2 < max+1) {
    if (hash[index2] == undefined) {
      index2 += 1
    } else if (hash[index2]) {
      for (var i = 0; i < hash[index2]; i++) {
        newArr.push(index2)
      }
    index2 += 1
    }
  }
  return newArr
}
CountingSort(s)







/////////////////////////////////////






//堆排序 (Heap Sort)

/*
1.最大堆调整（Max-Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
2.创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆
3.堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算
*/



//最大堆调整（Max-Heapify）
/*
* 从 index 开始检查并保持最大堆性质
*
* @array
*
* @index 检查的起始下标
*
* @heapSize 堆大小
*
*/
//接受3个参数（数组， 检测的位置的值：初始值为0， 堆的大小（数组的长度））—
//          (array, index, heapSize)
function maxHeapify(array, index, heapSize) {
  var iMax = index,                 //先假设最大值为index ，父节点下标
      iLeft = 2 * index + 1,        //左子节点下标
      iRight = 2 * (index + 1);     //右子节点下标


/* 如果（左子节点长度小 < 堆的大小（数组的长度）  且  父节点值 < 左子节点值）{
       //最大值 = 左子节点值
  }
*/
  if (iLeft < heapSize && array[index] < array[iLeft]) {
     iMax = iLeft;
   }

 /* 如果（右子节点长度小 < 堆的大小（数组的长度）  且  父节点值 < 右子节点值）{
        //最大值 = 右子节点值
   }
 */
 if (iRight < heapSize && array[iMax] < array[iRight]) {
   iMax = iRight;
 }

 /* 如果（最大值 != 检测的位置：初始值））{
      交换函数（数组, 最大值, 检测的位置）
      //交换后最大值被提上去了，检测位置发生变化，继续使用 最大堆调整（）函数递归调整
      最大堆调整(array, iMax, heapSize)
   }
 */
 if (iMax != index) {
   swap(array, iMax, index);
   maxHeapify(array, iMax, heapSize); // 递归调整
 }
}

//交换函数（数组, 最大值, 检测的位置的值）
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/*
接受2个参数（数组，//堆的大小（数组的长度））{
  var i
  i的父节点 = 向下取整(array.length / 2)-1

循环遍历（i的父节点 ； i >= 0; i--) {
  function maxHeapify(array, index, heapSize)
 }
}
*/
function buildMaxHeap(array) {
  var i,
    iParent = Math.floor(array.length / 2) - 1;
  for (i = iParent; i >= 0; i--) {
    maxHeapify(array, i, array.length)
  }
}


/*
接受1个参数（数组）{
  buildMaxHeap()             //Heap-Sort先调用Build-Max-Heap将数组改造为最大堆
  循环 (var i = 数组的长度 - 1; i > 0; i--){
  swap(array, 0, i)          //将堆顶和堆底元素交换
  maxHeapify(array, 0, i)    // 最大堆调整
  }
}
*/
function heapSort(array) {
  buildMaxHeap(array)
  console.log('buildMaxHeap',array)
  for (var i = array.length - 1; i > 0; i--) {
    swap(array, 0, i)
    maxHeapify(array, 0, i)
    console.log(array)
  }
  return array
}
//测试
var s = [0,1,2,5,2,7,1,6,8,23,6,0,0,0]
heapSort(s)


//
