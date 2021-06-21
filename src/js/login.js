
require('../css/login.less');
console.log('我是login.js');
document.ready(function () {
    let inpvel1 = document.querySelector('.inpvel1')
    let inpvel3 = document.querySelector('.inpvel3')
    let btn = document.querySelector('.btn')
    let jump = document.querySelector('.jump')
    jump.addEventListener('click', function (ev) {
        location.href = './register.html'
    })
    btn.addEventListener('click', function (ev) {

        let data = {
            account: inpvel1.value,
            password: inpvel3.value
        }
        $http.post('/users/login', data, function (res) {
            console.log(res);

            if (res.status === 0) {
                utils.toast(1,'登录成功');

                localStorage.setItem('user', JSON.stringify(res.data.user))
                setTimeout(function () {
                    location.href = './home.html';
                }, 1000)
            } else {
                utils.toast(0,'用户密码错误');
            }

        })
    })










})