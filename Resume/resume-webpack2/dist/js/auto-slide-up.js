'use strict';

!function () {
  // 添加 offset 类， 缓入动画。
  var specialTags = document.querySelectorAll('[data-x]');
  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  }

  setTimeout(function () {
    findClosestAndRemoveOffset();
  }, 1000);
  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset();
  });

  function findClosestAndRemoveOffset() {
    // log('window.scrollY',window.scrollY)
    var specialTags = document.querySelectorAll('[data-x]');
    var minIndex = 0;
    for (var _i = 1; _i < specialTags.length; _i++) {
      //下一标签默认距离-当前距离
      var min = Math.abs(specialTags[_i].offsetTop - window.scrollY);
      //当前标签距离-当前距离
      var s = Math.abs(specialTags[minIndex].offsetTop - window.scrollY);
      //
      if (min < s) {
        minIndex = _i;
      }
    }
    // 去除 offset 类， 缓入动画。
    specialTags[minIndex].classList.remove('offset');

    /////////////
    //自动更新导航栏下划线状态
    var id = specialTags[minIndex].id;
    specialTags[minIndex].classList.add('animate');
    var a = document.querySelector('a[href="#' + id + '"]');
    // console.log(a);
    var li = a.parentNode;
    var brothersAndMe = li.parentNode.children;
    for (var _i2 = 0; _i2 < brothersAndMe.length; _i2++) {
      brothersAndMe[_i2].classList.remove('highlight');
    }
    li.classList.add('highlight');
    // console.log(specialTags);
    // log('x',x)
  }
}.call();