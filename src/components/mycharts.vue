<template lang="html">
  <div>
    <div id="charts" ref="mycharts"></div>
    <div id="piecharts" ref="piecharts"></div>
  </div>
</template>

<script>
// 引入基本模板(主模块)
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件和饼图
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框和title组件和图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require("echarts/lib/component/legend")


export default {
  data(){
    return{

    }
  },
  mounted(){
    this.$nextTick(
      this.drawbar());
  },
  methods:{
    drawbar(){
      // 基于准备好的dom，初始化echarts实例
      let chartsOne=echarts.init(this.$refs.mycharts);//使用ref来绑定可以减少获取dom节点的消耗
      let piecharts=echarts.init(this.$refs.piecharts);

       // 绘制图表
      //可以先绘好基本设置，然后在异步里填上数据，也可以一并在异步里绘制和填数据

      let params={};
      this.$axios.get('static/json/charts.json',params).then(res=>{
        console.log(res);
        let results=res.data;
        //每月消费数据
        let detailData=results.data;
        //占比数据
        let proportion=results.proportion;
        let name=proportion.map(item=>item.name);
        let value=proportion.map(item=>item.value);

        chartsOne.setOption({
          title: {
             text: results.title,
             left: 'center',
             textStyle: {
                color: '#ccc'
             }
          },
          tooltip: {},
          grid:{
          　　x:40,//解决y轴上标签显示不完整的问题
          },
          xAxis: {
            //使用map(callback)返回横轴类目数组
            data:detailData.map(item=>{return item.month}),
            axisLabel :{//设置间隔为0，解决x轴便签显示不全的问题
                 interval:0
             },
          },
          yAxis: {},
          series: [{
            name: results.about,
            type: 'bar',
            data:detailData.map(item=>{return item.total}),
          }]
        });
        piecharts.setOption({
          // backgroundColor: 'white',
         title: {
             text: results.titletwo,
             left: 'center',
             // top: 20,
             textStyle: {
                 color: '#ccc'
             }
         },
         tooltip : {
             trigger: 'item',
             formatter: "{a} <br/>{b} : {d}%"
         },

         series : [
            {
                name:results.titletwo,
                type:'pie',
                 clockwise:'true',
                 startAngle:'0',
                 radius : '60%',
                 center: ['50%', '50%'],
                 data:[
                     {
                         value:value[0],
                         name:name[0],
                         itemStyle:{
                            normal:{
                                color:'rgb(255,192,0)',
                                shadowBlur:'90',
                                 shadowColor:'rgba(0,0,0,0.8)',
                                shadowOffsetY:'30'
                             }
                         }
                     },
                     {
                        value:value[1],
                         name:name[1],
                         itemStyle:{
                            normal:{
                                 color:'rgb(1,175,80)'
                            }
                         }
                    },
                     {
                         value:value[2],
                         name:name[2],
                         itemStyle:{
                             normal:{
                                color:'rgb(122,48,158)'
                            }
                        }
                     },
                     {
                         value:value[3],
                         name:name[3],
                         itemStyle:{
                             normal:{
                                color:'rgb(64, 95, 255)'
                            }
                        }
                     }

                 ],
            }
         ]
     }
        );
      }).catch((e)=>{
        let res=require('../assets/json/charts.json');
        console.log("打印chartsjson"+res);

        let results=res;
        //每月消费数据
        //axios请求返回的封装多了一层data，直接使用本地json直接res.data好了
        let detailData=results.data;
        //占比数据
        let proportion=results.proportion;
        let name=proportion.map(item=>item.name);
        let value=proportion.map(item=>item.value);

        chartsOne.setOption({
          title: {
             text: results.title,
             left: 'center',
             textStyle: {
                color: '#ccc'
             }
          },
          tooltip: {},
          grid:{
          　　x:40,//解决y轴上标签显示不完整的问题
          },
          xAxis: {
            //使用map(callback)返回横轴类目数组
            data:detailData.map(item=>{return item.month}),
            axisLabel :{//设置间隔为0，解决x轴便签显示不全的问题
                 interval:0
             },
          },
          yAxis: {},
          series: [{
            name: results.about,
            type: 'bar',
            data:detailData.map(item=>{return item.total}),
          }]
        });
        piecharts.setOption({
          // backgroundColor: 'white',
         title: {
             text: results.titletwo,
             left: 'center',
             // top: 20,
             textStyle: {
                 color: '#ccc'
             }
         },
         tooltip : {
             trigger: 'item',
             formatter: "{a} <br/>{b} : {d}%"
         },

         series : [
            {
                name:results.titletwo,
                type:'pie',
                 clockwise:'true',
                 startAngle:'0',
                 radius : '60%',
                 center: ['50%', '50%'],
                 data:[
                     {
                         value:value[0],
                         name:name[0],
                         itemStyle:{
                            normal:{
                                color:'rgb(255,192,0)',
                                shadowBlur:'90',
                                 shadowColor:'rgba(0,0,0,0.8)',
                                shadowOffsetY:'30'
                             }
                         }
                     },
                     {
                        value:value[1],
                         name:name[1],
                         itemStyle:{
                            normal:{
                                 color:'rgb(1,175,80)'
                            }
                         }
                    },
                     {
                         value:value[2],
                         name:name[2],
                         itemStyle:{
                             normal:{
                                color:'rgb(122,48,158)'
                            }
                        }
                     },
                     {
                         value:value[3],
                         name:name[3],
                         itemStyle:{
                             normal:{
                                color:'rgb(64, 95, 255)'
                            }
                        }
                     }

                 ],
            }
         ]
     }
        );



      });
    },
  }
}
</script>

<style lang="less" scoped>
#charts{
  width: 700px;
  height: 600px;
  margin:10px auto;
  display: flex;
  justify-content: center;

}
#piecharts{
  width: 700px;
  height: 600px;
  margin:10px auto;
  display: flex;
  justify-content: center;
}
</style>
