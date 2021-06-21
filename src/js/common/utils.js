/**
 * 工具函数
 */

const utils = {}
/**
 * @toast 页面提示弹出框
 * 
 */
utils.addicon = function (page) {
    let footer = document.createElement('div')
    footer.className = 'footers dpflex jctsd alcter'
    let html = ` 
    <a href='./home.html'>
    <div class="${page === 'home' ? 'item active' : 'item'}">
            <div class="icn">
    <i class="iconfont iconhome  "></i>
           </div>
    
    <span >首页</span>
</div></a>
<a href='./sports.html'>
<div class="${page === 'sports' ? 'item active' : 'item'}">
        <div class="icn">
            <i class="iconfont iconsports "></i>
        </div>
        <span>运动</span>
    </div></a>
   <a href='./about.html'>
   <div class="${page === 'about' ? 'item active' : 'item'}">
   <div class="icn">
       <i class="iconfont iconmine "></i>
   </div>
   <span>我的</span>
</div> </a>`
    footer.innerHTML = html;
    let body = document.querySelector('body')
    body.appendChild(footer)

}







utils.toast = function (status, text, timer = 1) {
    let toast = document.createElement('div')
    toast.className = 'toast'
    let html = ` <div class="icon">${status === 0 ? '√' : '!'}</div>
    <div class="to-text">${text}</div>`
    toast.innerHTML = html
    let body = document.querySelector('body')
    body.appendChild(toast)
    setTimeout(function () {
        toast.remove()
    }, timer * 1000)
}
/**
 * 转化数据格式
 */

utils.curricLum = function (str) {
    let obj = {}
    str = str.substr(1)
    /*   console.log(arr); */
    let arr1 = str.split('&')

    arr1.forEach(function (item) {

        let arr2 = item.split('=');

        obj[arr2[0]] = arr2[1]

    })
    return obj;
}

utils.datedd=function(str){

    let num=str
    if(num<10){
        num='0'+num
    }else{
        num=num
    }
    return num
}



window.utils = utils;