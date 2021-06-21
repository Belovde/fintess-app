/* 注册页面js */
require('../css/register.less');

document.ready(function () {
    let inpvel1 = document.querySelector('.inpvel1')
    let inpvel2 = document.querySelector('.inpvel2')
    let inpvel3 = document.querySelector('.inpvel3')
    let inpvel4 = document.querySelector('.inpvel4')
    let btn = document.querySelector('.btn')
    let smg = document.querySelector('.smg')
    let pasw = document.querySelector('.panel .pasw')
    console.log(pasw);


    /* 验证码 */
    let yzmtext = ""
    let captcha = new CaptchaMini();
    captcha.draw(document.querySelector('#captcha'), function (res) {
        yzmtext = res
        console.log(res);
    });
    /* 正则验证 */
    btn.addEventListener('click', function (ev) {
        let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if (!reg.test(inpvel1.value)) {
            
            utils.toast(1,'电话号码格式错误')
            return;

        } else {
            smg.textContent = ''
        }

        if (inpvel2.value.toLowerCase() != yzmtext.toLowerCase()) {
          
            utils.toast(1,"验证码输入错误")
            return;

        } else {
            smg.textContent = ''
        }
        let reg2 = /^[a-zA-Z]\w{5,17}$/
        if (!reg2.test(inpvel3.value)) {
            utils.toast(1,"密码格式错误")
           
            return;
        } else {
            smg.textContent = ''
        }
        if (inpvel4.value != inpvel3.value) {
           
            utils.toast(1,"确认密码输入错误")
            return;

        } else {
            smg.textContent = ''
        }
        /* 接口请求 */
        let data = {
            account: inpvel1.value,
            password: inpvel3.value
        }
        console.log(data);

        $http.post('/users/add', data, function (res) {
            // if(res.status===0){
            //     utils.toast(1,1,"正确")
            //     setTimeout(function(){
            //         location.href = './login.html'
            //     },1000)
            // }else{
            //     utils.toast(0,1,"错误")
            // }
            //判断请求是否成功
             if (res.status === 0) {
                //提醒用户  
                utils.toast(1, 1, '注册成功');
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setTimeout(function () {
                    location.href = './home.html';
                }, 1000)
               login(data)
            } else {
                utils.toast(0, 1, res.msg);
                
             } 
            
            
        })

       

       
    })
       function login(data){
        $http.post('/users/login', data, function (res) {
            console.log(res);

            if (res.status === 0) {
                utils.toast(1, '登录成功');

                localStorage.setItem('user', JSON.stringify(res.data.user))
                setTimeout(function () {
                    location.href = './home.html';
                }, 1000)
            } else {
                utils.toast(0, '用户密码错误');
            }

        })
       }
    


     /* 点击密码登录跳转页面 */
     pasw.addEventListener('click',function(ev){
         location.href='./login.html';
        
        
    })





})