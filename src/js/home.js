
// const jquery = require('jquery')

/*导入home页面的css */
require('../css/home.less');

console.log('我是 home.js');
document.ready(function () {
    let ranknum = document.querySelector('.ranknum');
    let punchday = document.querySelector('.punchday');
    let today = document.querySelector('.today')
    let insigniaNum = document.querySelector('.insigniaNum')


    let user = JSON.parse(localStorage.getItem('user'))



    utils.addicon('home')

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })



    function getInfo() {
        $http.get('/headPageInfo?userId=' + user.userId, function (res) {
            if (res.status == 0) {
                ranknum.textContent = res.data.rank
                punchday.textContent = res.data.punchIn
                insigniaNum.textContent = res.data.insigniaNum

 /* 判断是否打卡 打卡提示框隐藏或者显示*/
                if (res.data.isPunch === "true") {
                    today.style.display = 'none'
                } else {
                    today.style.display = 'block'
                }
            }
           
           

        })
    }
    getInfo()

    today.addEventListener('click', function (ev) {
        $http.get('/clockIn?userId=' + user.userId, function (res) {
            /* 判断打卡成功就显示成功提示框 打卡失败就显示提示失败框*/
            if (res.status == 0) {
                //调用弹出框
                utils.toast(1,'打卡成功',2)
               //成功后调用函数 重新渲染页面
                getInfo()
            } else {
                utils.toast(0, res.msg,2);
            }
        })
    })

})