
require('../css/about.less');

document.ready(function () {
  utils.addFooter('about');
  let imgUrl = 'http://139.9.177.51:8099';
  let user = JSON.parse(localStorage.getItem('user'));


  //获取dom
  let imgDom = document.querySelector('.img-box');
  let nameDom = document.querySelector('.name');
  let qianDom = document.querySelector('.qian');
  let oneBox = document.querySelector('.one-box');
  let oneBoxDom = document.querySelector('.one1-box');

  let btn = document.querySelector('.file-btn');
  let ttDom =  document.querySelector('.tt')
  function getrss() {

    $http.get('/users/accountinfo?userId=' + user.userId, function (res) {

      if (res.status == 0) {

        if (res.data.nickname) {
          nameDom.textContent = res.data.nickname
        }
        if (res.data.imgurl) {
          imgDom.src = res.data.imgurl
        }
        if (res.data.sign) {
          qianDom.textContent = res.data.sign
        }
      }

    })

  }
  getrss();
    
  function getrsss() {

    $http.get('/users/mysportsBadge?userId=' + user.userId, function (res) {

      if (res.status == 0) {

        if (res.data.sports.times) {
          oneBox.textContent = res.data.sports.times
        }
        if (res.data.sports.calorie) {
          oneBoxDom.textContent = res.data.sports.calorie
        }
   
      }

    })

  }
  getrsss();

  function postFile ( ){

    btn.addEventListener('change',function (ev) {

      $updateFile('/users/upload','imgurl',this.files[0],function(res) {
        if(res.status == 0){
          imgDom.src = imgUrl+res.data
        }
      })
    })
    

  }
  postFile();
  //给头像注册点击事件
  imgDom.addEventListener('click',function (ev){
    btn.click();
    ev.stopPropagation();
  })

  ttDom.addEventListener('click',function (res) {
    location.href=''
  })


})

