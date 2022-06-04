//为了保证兼容性，这里取两个值，哪个有值取哪一个
//scrollTop就是触发滚轮事件时滚轮的高度
window.addEventListener("scroll", function (event) {
   let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
   console.log(scrollTop);
   if (scrollTop > 155) {
      document.querySelector('.publicTopBanner').style.opacity = 1
      //不加display滑动头部栏会覆盖掉之前的导航栏hover效果
      document.querySelector('.publicTopBanner').style.display = 'block'

   } else {
      document.querySelector('.publicTopBanner').style.opacity = 0
      document.querySelector('.publicTopBanner').style.display = 'none'

   }
});

function changeBanner() {
   //获取当前时间钟头数
   datetoday = new Date();
   timenow = datetoday.getTime();
   datetoday.setTime(timenow);
   thehour = datetoday.getHours();
   //表示时间超过18点或者小于6点的时候换成夜间背景
   if (thehour > 20 || thehour < 6) {
      document.querySelector('#video').src = "./vedio/moon.webm"
      document.querySelector('.logo_img').src = "./assets/logo.png"
      document.querySelector('.topmask').display = "none"

   } else {
      document.querySelector('#video').src = "./vedio/day.mp4"
      document.querySelector('.logo_img').src = "./assets/daylogo.png"
      document.querySelector('.topmask').style.display = "block"
   }
}
window.onload = function () {
   // 页面加载判断时间选择背景
   changeBanner()
   // 每隔一个小时判断一次背景
   setInterval(() => {
      changeBanner()
   }, 3600000);
}