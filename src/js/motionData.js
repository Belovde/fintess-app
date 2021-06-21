require('../css/motionData.less')
const echarts=require('echarts')
document.ready(function(){
    console.log(echarts);
    var myChart = echarts.init(document.getElementById('main'));
    var myChart2 = echarts.init(document.getElementById('main2'));
    var myChart3 = echarts.init(document.getElementById('main3'));
    var myChart4 = echarts.init(document.getElementById('main4'));
  
    
    /* 图一 */
 let data=[
     {data:'6-15',time:77},
     {data:'6-16',time:80},
     {data:'6-17',time:60},
     {data:'6-18',time:50},
     {data:'6-19',time:70},
     {data:'6-20',time:40},
     {data:'6-11',time:77}
    

 ]
       let datas=[]
       let times=[]
   data.forEach(function(item){
      datas.push(item.data)
      times.push(item.time)
   })
    
    var option = {
        title: {
            text: '近7天运动时长'
        },
        tooltip: {},
        /* legend: {
            data:['销量']
        }, */
        xAxis: {
            data:datas
        },
        yAxis: {},
        series: [{
           /*  name: '销量', */
            type: 'bar',
            data: times
        }]
    };
    myChart.setOption(option);
    console.log(myChart);


/* 饼图 */
    let data2=[
        {data:'6-15',time:77},
        {data:'6-16',time:80},
        {data:'6-17',time:60},
        {data:'6-18',time:50},
        {data:'6-19',time:70},
        {data:'6-20',time:40},
        {data:'6-11',time:77}
       
   
    ]
          let datas2=[]
          let times2=[]
      data2.forEach(function(item){
         datas2.push(item.data)
         times2.push(item.time)
      })
       
       var option2 = {
        title: {
            text: '运动分类',
          /*   subtext: '纯属虚构', */
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 1048, name: '跑步'},
                    {value: 735, name: '骑行'},
                    {value: 580, name: '训练'}
                   /*  {value: 484, name: '联盟广告'},
                    {value: 300, name: '视频广告'} */
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
       myChart2.setOption(option2);
       console.log(myChart2);
    

/* 横向图 */

       let data3=[
        {data:'6-15',time:77},
        {data:'6-16',time:80},
        {data:'6-17',time:60},
        {data:'6-18',time:50},
        {data:'6-19',time:70},
        {data:'6-20',time:40},
        {data:'6-11',time:77}
       
   
    ]
          let datas3=[]
          let times3=[]
      data3.forEach(function(item){
         datas3.push(item.data)
         times3.push(item.time)
      })
       
       var option3 = {
        title: {
            text: '近七天运动分类',
           /*  subtext: '数据来自网络' */
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
          /*   data: ['2011年', '2012年'] */
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: datas3
        },
        series: [
            {
                /* name: '2011年', */
                type: 'bar',
                data: times3
            },
            {
               /*  name: '2012年', */
                type: 'bar',
                data:times3
            }
        ]
    };
       myChart3.setOption(option3);
       console.log(myChart3);
/* 近两天运动数据 */
let data4=[
    {data:'6-15',time:77},
    {data:'6-16',time:80},
    {data:'6-17',time:60},
    {data:'6-18',time:50},
    {data:'6-19',time:70},
    {data:'6-20',time:40},
    {data:'6-11',time:77}
   

]
      let datas4=[]
      let times4=[]
  data4.forEach(function(item){
     datas4.push(item.data)
     times4.push(item.time)
  })
   
   var option4 = {
    title: {
        text: '近七天运动次数',
       /*  subtext: '数据来自网络' */
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
};
   myChart4.setOption(option4);
   console.log(myChart4);
})

