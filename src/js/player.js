require('../css/player.less')
document.ready(function(){
    let videoList=JSON.parse(localStorage.getItem('videoList'))
console.log(videoList);
let baseUrl = 'http://139.9.177.51:8099';
let videos=document.querySelector('video')
let nums=document.querySelector('.num')
let end=document.querySelector('.end')
let texts=document.querySelector('.texts')
let up=document.querySelector('#up')
let pause=document.querySelector('#pause')
let down=document.querySelector('#down')
let footbox=document.querySelector('.foot')
let modalDom = document.querySelector('.modal');
let contiuneBtn = document.querySelector('.contiune');
let endBtn = document.querySelector('.ends');

/* 修改视频总数量 */
end.textContent=videoList.length;
/* 当前视频播放顺序  数组的索引值 */
let index=0;
/* 播放和暂停视频 */
function play(index){
    /*把后端提供的视频数据地址给到页面上 */
    videos.src=baseUrl+videoList[index].videoUrl;
    /* 让播放视频的顺序渲染到页面 */
    nums.textContent=index+1;
    texts.textContent=videoList[index].title;
}
play(index);
/*下一个视频 */
down.addEventListener('click',function(ev){
    if(index<videoList.length-1){
        index=index+1;
        play(index)
    }
})
/* 上一个视频 */
up.addEventListener('click',function(ev){
    if(index!=0){
        index=index-1;
        play(index)
    }
})
/* 自动切换下个视频 */
videos.addEventListener('ended',function(ev){
    if(index<videoList.length-1){
        index=index+1;
        play(index)
    }
})
/* 视频播放进度条 */
//进度条宽度 = （当前播放时间/总时间）*100%
//需要一个定时器获取当前时间 需要更改进度条的宽度
//给进度条绑定动画，设置动画的执行时长为视频的总时间
setInterval(function(){
    let footwidth=(videos.currentTime/videos.duration)*100;
    footwidth=footwidth+'%';
    footbox.style.width=footwidth;
},60)
/*  */
pause.addEventListener('click', function (ev) {
    //停止视频的播放
    videos.pause();
    //显示蒙层
    modalDom.style.display = 'block';
})
//继续播放
contiuneBtn.addEventListener('click', function (ev) {
    //开始视频的播放
    videos.play();
    //隐藏蒙层
    modalDom.style.display = 'none';
})
//停止播放
endBtn.addEventListener('click', function (ev) {
    //跳转页面-列表
     location.href = './sports.html'

    //详情页
    // location.href = './courseDetail.html?'
   
})

})