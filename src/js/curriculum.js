require('../css/curriculum.less')
document.ready(function () {
    let endend=document.querySelector('.endend')
    let userID = location.search
    let obj = utils.curricLum(userID)
    console.log(obj);
    
    let baseUrl = 'http://139.9.177.51:8099'
    let imgBox = document.querySelector('.imgBox');
    let text = document.querySelector('.text')
    let data=null;
    $http.get('/sports/courseDetail?id='+ obj.id, function (res){
        console.log(res);
        data=res.data;
        text.textContent = res.data.name;
            imgBox.src = baseUrl + res.data.imgurl;
    })

   endend.addEventListener('click',function(ev){
       console.log(data);
       /* 将课程列表视频储存到本地 */
       localStorage.setItem('videoList', JSON.stringify(data.fragments))
       /* 跳转页面 */
       location.href='./player.html'
   })







})