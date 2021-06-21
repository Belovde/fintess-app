require('../css/personal.less')
document.ready(function () {
    console.log(weui);

    let genders = document.querySelector('#genders')
    let gendersText = document.querySelector('#gendersText')
    let birTime = document.querySelector('#bir-time')
    let birTimetext = document.querySelector('#bir-time-text')

    let province = document.querySelector('#province')
    let provinceText = document.querySelector('#provinceText')
    let ctiy = document.querySelector('#ctiy')
    let ctiyText = document.querySelector('#ctiyText')

    let endBox = document.querySelector('.endBox')

    let niname = document.querySelector('.niname')
    /* console.log(niname); */

    let ttextbox = document.querySelector('.ttextbox')

    let users = JSON.parse(localStorage.getItem('user'))
    let data = {
        userId: users.userId,
        nickname: "",
        gender: "",
        birTime: "",
        province: "",
        ctiy: "",
        sign: ''


    }



    genders.addEventListener('click', function (ev) {
        weui.picker([{
            label: '男',
            value: 0
        }, {
            label: '女',
            value: 1
        }
        ], {

                onConfirm: function (result) {
                    data.gender = result[0].label
                    gendersText.textContent = result[0].label
                },
                title: '单列选择器'
            });

    })
    birTime.addEventListener('click', function (ev) {
        weui.datePicker({
            start: 1920,
            end: new Date().getFullYear(),

            onConfirm: function (result) {

                console.log(result);

                birTimetext.textContent = `${result[0].value}-${utils.datedd(result[1].value)}-${utils.datedd(result[2].value)}`;
                data.birTime = birTimetext.textContent
            },
            title: '时间选择'
        });
    })

    /* 选择省份 */
    province.addEventListener('click', function (ev) {
        $http.get('/address/province', function (res) {
            /*  console.log(res.data); */

            let arr = res.data
            let arr1 = arr.map(function (item) {
                return {
                    value: item.addressId,
                    label: item.name
                };

            })
            weui.picker(arr1
                , {

                    onConfirm: function (result) {
                        provinceText.textContent = result[0].label
                        data.province = result[0]
                        ctiyText.textContent = "请选择"
                        data.ctiy = ""
                    },
                    title: '单列选择器'
                });
        })


    })

    /* 选择市区 */
    ctiy.addEventListener('click', function (ev) {
        if (data.province == "") {
            utils.toast(0, '请先选择省份')
            return;
        }
        $http.get('/address/city/' + data.province.value, function (res) {
            /*  console.log(res.data); */

            let arr = res.data
            let arr1 = arr.map(function (item) {
                return {
                    value: item.addressId,
                    label: item.name
                };

            })
            weui.picker(arr1
                , {

                    onConfirm: function (result) {
                        ctiyText.textContent = result[0].label
                        data.ctiy = result[0].label
                        /*  data.provinceText = result[0] */
                    },
                    title: '单列选择器'
                });
        })


    })



    /*    console.log(users); */

    /*  用户登录账号渲染页面 */
    $http.get('/users/accountinfo?userId=' + users.userId, function (res) {
        if (res.data.nickname) {
            niname.value = res.data.nickname
            data.nickname = res.data.nickname
        }
        if (res.data.gender) {
            gendersText.textContent = res.data.gender
            data.gender = res.data.gender
        }
        if (res.data.birthday) {
            birTimetext.textContent = res.data.birthday
            data.birTime = res.data.birthday
        }
        if (res.data.address) {

            let address = res.data.address.split(',')
            provinceText.textContent = address[0]

            ctiyText.textContent = address[1]

        }
        if (res.data.sign) {


            ttextbox.textContent = res.data.sign

            data.sign = res.data.sign

        }
        return res

    })
    /*  console.log(data);
     console.log(1234); */


    /* 点击保存数据  下次登录直接渲染页面 */
    endBox.addEventListener('click', function (ev) {
        data.sign = ttextbox.value
        data.address = [data.province.label, data.ctiy]
        data.nickname = niname.value

        console.log(data);

        $http.post('/users/userEdit', data, function (res) {
            console.log(res);
            if(res.status===0){
                utils.toast(1,'数据修改成功')
               setTimeout(function(){
                location.href='about.html'
               },1200)
            }
           
             
        })




        /*  localStorage.setItem('datas', JSON.stringify(data))
         let datass= JSON.parse(localStorage.getItem('datas')) */
        /*    console.log(datass); */

        /*   niname.value=datass.nickname;
          gendersText.textContent=datass.gender;
          birTimetext.textContent=datass.birTime;
          provinceText.textContent=datass.province.label;
          ctiyText.textContent=datass.ctiy
       */




    })




})