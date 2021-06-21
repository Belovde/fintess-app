require('../css/about.less')
document.ready(function () {
    utils.addicon('about')

    /* 功能：实现推出登录跳转页面 及本地存储删除 */

    let imgurls = 'http://139.9.177.51:8099';
    let button = document.querySelector('.btn')

    let pttt = document.querySelector('.pttt')
    console.log(pttt);

    let ttex = document.querySelector('.ttex')
    let ovov = document.querySelector('.ovov')
    console.log(ovov);
    
    let numbers = document.querySelector('.numbers')
    let numbers2 = document.querySelector('.numbers2');
    let fileBtn = document.querySelector('.file-btn')
    let portrait=document.querySelector('.portrait')


    let user = JSON.parse(localStorage.getItem('user'))
    /* 实现头像 用户名 个性签名上传页面功能   1.先请求接口  2.请求成功后判断 如果请求成功 就渲染页面 3.封装函数 需要的时候调用就可以了*/
    function uersSport() {
        $http.get('/users/accountinfo?userId=' + user.userId, function (res) {
            if (res.status == 0) {
                /* 判断 当有用户名的值时 渲染页面 */
                if (res.data.nickname) {
                    ttex.textContent = res.data.nickname
                    console.log(12345);
                   
                    
                }
                /* 判断当个性签名有值的时候 渲染页面 */
                if (res.data.sign) {
                    ovov.textContent = res.data.sign
                   
                    
                 } 
                 /* 判断 */
                if (res.data.imgurl) {
                    pttt.src =res.data.imgurl
                    console.log(123);
                    
                }
               
            }
           
        })
    }
    uersSport()
/* 实现运动数据 上传页面页面的功能  */
    function uersInof() {
        $http.get('/users/mysportsBadge?userId=' + user.userId, function (res) {
            if(res.status==0){
                if(res.data.sports.coursetims){
                    numbers.textContent = res.data.sports.coursetims;
                }
               /*  numbers.textContent = res.data.sports.coursetims; */
               if(res.data.sports.calorie){
                numbers2.textContent = res.data.sports.calorie
            }
           /*  numbers2.textContent = res.data.sports.calorie */
            }
            
           
        })
    }
    uersInof() 
    /*    uersInof() */
/* 头像上传 */
    fileBtn.addEventListener('change', function (ev) {
        console.log(ev);

       
        $updateFile('/users/upload', 'imgurl', this.files[0], function (res) {
            let data={
                userId:user.userId,
                imgurl:imgurls+res.data
            }
            if (res.status == 0) {
                
                userHead(data)
            }
        })
    })
    pttt.addEventListener('click',function(ev){
        fileBtn.click()
        /* 阻止冒泡事件   当点击头像盒子的时候 外面大盒子的点击事件会被触发
         会发生父盒子的跳转页面功能 所以会用到阻止冒泡*/
        ev.stopPropagation()
    })
  /* 页面刷新头像保留 */
    function userHead(data){
        $http.post('/users/userEdit',data,function(res){
            pttt.src= data.imgurl
            utils.toast(1,'上传成功')
        })
    }
 /* 点击头像大盒子跳转页面 */
 portrait.addEventListener('click',function(ev){
     location.href='./personal.html'
 })
    /* 退出登录 */
    button.addEventListener('click', function (ev) {
        localStorage.removeItem('user')
        location.href = './login.html'

    })

})