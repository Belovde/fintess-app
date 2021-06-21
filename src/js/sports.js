require('../css/sports.less')
document.ready(function () {
    let videpbox = document.querySelector('.video-boxs')
    let videomenu = document.querySelector('.video-menu')
    console.log(videomenu);
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    


    let ovdiourl = 'http://139.9.177.51:8099';
    utils.addicon('sports')
   
    /* 添加渲染最新课程 */
    $http.get('/sports/courseList?id=' + user.userId, function (res) {
        console.log(res);
        
        let data = res.data
        console.log(data);
        let course = data.find(function (item) {
            return item.latest == 1
        })
        console.log(course);
        console.log(data);


        let newHtml = `
        <a href="./curriculum.html?id=${course.courseId}">
        <div class="video"><img src="${ovdiourl + course.imgurl}" alt=""></div>
           <div class="video-text">
               <p>${course.name}</p>
               <p class="text">${course.desc}</p>
           </div>/a>
        
           `
        videpbox.innerHTML = newHtml

        /* 渲染课程菜单 */
        let videotxte = ""

        data.forEach(function (item) {
            console.log(item);

            videotxte += ` 
            <a href='./curriculum.html?id=${item.courseId}'>
            <div class="video-menu1">
            <img src="${ovdiourl + item.imgurl}" alt="">
            <p class="p1">${item.name}</p>
            <p class="p2">${item.desc}</p>
        </div>
            </a>
           
           `
          
        })
        videomenu.innerHTML = videotxte



    })

})


