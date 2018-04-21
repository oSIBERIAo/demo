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
