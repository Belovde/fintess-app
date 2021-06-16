/**
 * 工具函数
 */

const utils = {}

/**
 * @toast  页面的提示弹窗
 * @status number  0:失败 1：成功
 * @text   string  提示信息
 * @timer   Number  S
 */
utils.toast = function (status,text,timer=1) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    let html = `
        <div class=" icon" >
               ${status === 0 ? '!' : '√'}
        </div>
        <div class="toast-text">
           ${text}
        </div>
    `
    toast.innerHTML = html;
    document.querySelector('body').appendChild(toast);

    // 定时删除自己
    setTimeout(function () {
        toast.remove();
    }, timer * 1000)


}
    
utils.addFooter = function(page) {
    let footer = document.createElement('div');
    footer.className = 'footer mt20 dpflex flexadd flexcen';
    let html = `
        <a href="./home.html">
            <div class="${page === 'home' ? 'nav active' : 'nav' }">
                <p ><i class="iconfont iconhome"></i></p>
                <p>首页</p>
            </div>
        </a>
        <a href="./sports.html">
            <div class="${page === 'sports' ? 'nav active' : 'nav' }">
                <p ><i class="iconfont iconsports"></i></p>
                <p>运动</p>
            </div>
        </a>
        <a href="./about.html">
            <div class="${page === 'about' ? 'nav active' : 'nav' }">
                <p ><i class="iconfont iconmine"></i></p>
                <p>我的</p>
            </div>
        </a>
    `;
    footer.innerHTML= html;
    document.querySelector('body').appendChild(footer);
}


window.utils = utils;