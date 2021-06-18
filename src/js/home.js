
// const jquery = require('jquery')

/*导入home页面的css */
require('../css/home.less');

console.log('我是 home.js');
document.ready(function () {
      //domo节点获取
  let rankDom = document.querySelector('.rank');
  let clockDom = document.querySelector('.clock');
  let badgeDom = document.querySelector('.badge');
  let carBtnDom = document.querySelector('#carbtn');



  let user = JSON.parse(localStorage.getItem('user'));


  utils.addFooter('home');
  

  var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })

  //请求ajax--首页数据
  function getready (){
    $http.get('/headPageInfo?userId='+user.userId,function(res) {

      //判断是否成功拿到值
      if(res.status == 0){
        rankDom.textContent = res.data.rank;
        clockDom.textContent = res.data.punchIn;
        badgeDom.textContent = res.data.insigniaNum;
      }
      //判断是否显示/隐藏 打卡按钮
      // 已经打卡
      if(res.data.isPunch === 'true'){
        carBtnDom.style.display = 'none';
      }else{
        carBtnDom.style.display = 'block';
      }
    })
  }
  getready();

  //点击立即打卡按钮
  carBtnDom.addEventListener('click',function(ev){
    $http.get('/clockIn?userId='+user.userId,function(res){
      if(res.status===0){
        utils.toast(1,'打卡成功');
         //打卡成功之后 重新拉取首页数据 重新渲染首页的所有数据
        getready();

      }else{
        utils.toast(0,'打卡失败')
      }
    })
  })
})