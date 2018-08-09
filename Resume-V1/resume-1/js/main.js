window.onscroll = function (e) {
    // console.log(e)
    // console.log(window.scrollY) 
    if (window.scrollY > 0) {
        topNavBar.classList.add("topNavBarActive") 
    } else {
        topNavBar.classList.remove("topNavBarActive") 
    }
    // console.log('window.scrollY', window.scrollY);
    // var aa = document.querySelectorAll('a[href="#portfolio"]')
    // console.log(aa);
    
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);


var aTags = document.querySelectorAll('div.topNavBar > nav > ul > li > a')
for (let index = 0; index < aTags.length; index++) {
    const element = aTags[index];
    element.onclick = function (e) {
        e.preventDefault()
        let a = e.currentTarget
        let ahref = a.getAttribute('href')
        let element = document.querySelector(ahref)
        let h = element.getBoundingClientRect().y
        let currentTop = window.scrollY
        // console.log('currentTop', currentTop) 
        let top = element.offsetTop
        
        let targetTop = top - 70
        let s = Math.abs(targetTop - currentTop)
        // let n = 60
        // let distance = Math.abs(s / n)
        // let duration = 5
        let time = s / 100 * 600
        if (time > 1000) {
            time = 1000
        }
        // console.log('currentTop', currentTop);
        // console.log('top', top);
        // console.log('s', s);
        // console.log('distance', distance);
        
        // let i = 0
        // let id = setInterval(()=> {
        //     if(i === n){
        //       window.clearInterval(id)
        //       return  
        //     } else if (distance === 0){
        //       window.clearInterval(id)
        //       return
        //     } else if (s < 0) {
        //       window.scroll(0, targetTop) 
        //       console.log('hahhah');
        //       window.clearInterval(id)
        //       return
        //     }
        //   i = i + 1
        //     window.scroll(0, currentTop + distance*i)     
        // }, duration)
        var coords = { x: 0, y: currentTop }; // Start at (0, 0)
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, time)
            .easing(TWEEN.Easing.Exponential.Out)
            .onUpdate(function () {  
                addEventListener("scroll", function (params) {
                })              
                window.scroll(0, coords.y)
            })
            .start();

        // window.scroll(0, top - 70)
        // console.log('top', top); 
        // console.log('h', h);    
        // console.log('a', a);
        // console.log('ahref', ahref);
        // console.log('e', e); 
    }   
}
