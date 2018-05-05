
//请填写 ??? 使得 students 按分数的高低从大到小排列
var students = ['小明','小红','小花']
var scores = { 小明: 59, 小红: 99, 小花: 80 }
students.sort(function(key, key2){
     return scores[key2] - scores[key]
})


//获取所有偶数
//得到所有偶数的平方
var a = [1,2,3,4,5,6,7,8,9]
a.filter(???).map(???) // [4,16,36,64]

a.filter(function(value){
  return value % 2 === 0
}).map(function(value){
  return value * value
})


//计算所有奇数的和
var a = [1,2,3,4,5,6,7,8,9]
a.reduce(???,???)

a.reduce(function(arr,value){
    if(value % 2 === 1) {
      arr = arr + value
      return arr
    } else {
      return arr
    }
})









































//
