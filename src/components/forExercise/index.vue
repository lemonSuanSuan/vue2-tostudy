<template lang="html">
<!-- <layout></layout> -->
<section class="detail">
    <div>
     <yd-slider autoplay="3000" class="banner" :show-pagination="false">
       <yd-slider-item >
         <!-- 这里添加一个div来放图片 -->
         <div>
           <!-- <a href="http://www.ydcss.com"> -->
               <img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="" class="banner-img">
           </a>
         </div>

         </yd-slider-item>
         <yd-slider-item>
             <a href="http://www.ydcss.com">
                 <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
             </a>
         </yd-slider-item>
         <yd-slider-item>
             <a href="http://www.ydcss.com">
                 <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
             </a>
         </yd-slider-item>
         </yd-slider>
     </div>
     <div class="head">
       <div class="name_warp">
         <span class="name">时代天韵（广州）</span>
       </div>
       <div class="commision_wrap">
         <div class="average_price">均价(约): 26000元/㎡</div>
         <div class="commission_rate">
           <span>住宅 3.0‰(税前)</span>
           <div class="commision_icon"></div>
         </div>
       </div>
     </div>
     <div class="reason">
       <div class="title">
         <div class="icon"></div>
         <span>推荐理由</span>
       </div>
       <div class="reason_detail">
         <div class="item" v-for="(item,index) in reasons">
           <span>{{reasonnum[index]}}</span>
           <span class="content">{{item.rea}}</span>
         </div>
       </div>
     </div>
     <div class="msg">
       <div class="title">
         <div class="icon"></div>
         <span>基本信息</span>
       </div>
       <div class="msg_detail">
         <div class="item">
           <span>产品类型 :</span>
           <span class="content"> details.productTypeNameList</span>
         </div>
         <div class="item">
           <span>项目地址 :</span>
           <span class="content"> details.projectAddress</span>
         </div>
         <div class="item">
           <span>优惠信息 :</span>
           <span class="content"> details.discountInfo</span>
         </div>
       </div>
       <div class="path">
         <div class="item">
           <div class="img-wrap">
             <img src="http://times-plus.timesgroup.cn/timesangel/userfiles/projectImage/01621C4F/435X262px-2.jpg" alt="">
           </div>
           <div class="type"><p>区位图</p></div>
         </div>
         <div class="item">
           <div class="img-wrap">
             <img src="http://times-plus.timesgroup.cn/timesangel/userfiles/projectImage/01621C4F/435X262px.jpg" alt="">
           </div>
           <div class="type"><p>总规划</p></div>
         </div>
       </div>
     </div>
     <div class="door">
       <div class="title">
         <div class="icon"></div>
         <span>户型鉴赏</span>
       </div>
       <div class="door_detail"  >
         <div class="item" v-for="items in reasons" @click="open_photo">
           <div class="img-wrap">
             <img src="http://times-plus.timesgroup.cn/timesangel/userfiles/projectImage/时代天韵（广州）/houseTypeImage/435X380px-1.jpg" alt="">
           </div>
           <div class="type">
             <p>chineseName</p>
             <p>fang房ting厅wei卫(约)area㎡</p>
           </div>
         </div>
       </div>
     </div>
     <div class="facilities">
       <div class="title">
         <div class="icon"></div>
         <span>项目配套</span>
       </div>
       <div class="facilities_detail">
         <p>xmpt360°全能住区 湖山国际生活封面
 踞中新知识城轴心，远眺帽峰山，270°近览南向一线凤凰湖景，拥享山湖园三重景观。位于已开通的知识城线何棠下站，将6站直达天河；
 拟2019年开业的约4.8万㎡邻里中心（建筑面积）近在咫尺；南方医院分院、九龙政府、老人接管中心等配套在侧。
 中新知识城拟建18所一站全优国际学府，南洋华侨中学、广州实验中学拟2019年招生。项目专属对口市二中会元学校，并内部配建幼儿园和小学。</p>
       </div>
     </div>

     <div class="basic_info">
       <div class="title">
         <div class="icon"></div>
         <span>基础信息</span>
       </div>
       <div class="basic_detail">
         <div class="item">建筑面积：acreageRange</div>
         <div class="item">容积率：</div>
         <div class="item">预计收楼时间：</div>
         <div class="item">开盘时间：</div>
         <div class="item">占地面积：</div>
       </div>
     </div>

     <div class="disclaimer" :class="{'tips-limit-1':isActive}">
      <yd-icon name="warn-outline" size="inherit"></yd-icon>
      <!-- <yd-icon name="warn-outline" class="jinggao-icon"></yd-icon> -->
    温馨提示
1.本资料所展示内容来源于截止制作之日本项目红线内外的状况、政府公示文件、新闻媒体的公开报道或红线内开发报建资料,展示内容最终以政府批准文件及《商品房买卖合同》(含补充办议)约定为准,开发商不对展示内容做承诺或担保。
2.因受条件所限和不同主体之间的认知差异,开发商未必对所有不利因素一一提示,敬请您仔细考虑后再做购买决策。
3.本资料仅对本户型的空间分布等信息做效果示意,可能与实际情况存在差异,且位于不同楼栋或楼层的同一户型的物业在结构、外立面、层高、面积等方面也可能存在差异:本资料所展示内容(包括但不限于面积、尺寸、装修、装饰、家电、家具等)仅作示意,非交付标准。本资料所展示内容来源于截止印刷之日开发商在政府备案的报建资料,展示示内容最终以政府批准文件及《商品房买卖合同》(含补充协议)约定为准,开发商不对展示内容做承诺或担保。
4.若本资料所展示内容发生变化,开发商不再另行通知。
  </div>
  <div class="show-tips"  v-show="isActive" @click="del_limit">展开</div>
     <div class="footer">
       <div class="phone-wrap"><div class="phone"></div><a href="tel:400-0000-688">电话</a>
　　</div>
       <div class="collect-wrap" v-if="!al_collect">
         <div class="un-collect" ></div>
         收藏
       </div>
       <div class="collect-wrap" v-if="al_collect">
         <div class="collect" ></div>
         取消
       </div>

       <div class="rec-wrap"><div class="rec"></div><span><router-link  to="/recommend">我要推荐</router-link></span></div>
     </div>





</section>



</template>

<script>

// import layout from './layout';
// import {initPhotoSwipeFromDOM} from '../static/js/init_photoswipe.js';
// details[]返回数据列表
export default {
  data(){
    return{
      isActive:true,//控制提示的样式,因为展开的div是否显示跟这个样式是否显示一致，所以都用它来控制
      detail:[],
      reasons:[
        {id:0,rea:"地处中新知识城南起步区，生活配套完善地处中新知识城南起步区，生活配套完善"},
        {id:1,rea:"地铁上盖，毗邻何棠下站快线6站到天河"},
        {id:2,rea:"知识城唯一南向一线望湖项目，景观资源稀缺"},
        {id:3,rea:"知识城唯一南向一线望湖项目，景观资源稀缺"},
        {id:4,rea:"知识城唯一南向一线望湖项目，景观资源稀缺"}
      ],
      reasonnum:["理由一 ：","理由二 ：","理由三 ：","理由四 ：","理由五 ：","理由六 ：","理由七 ：","理由八"],
      al_collect:0,//0是false
      //
      scope:103,
      format:"json",
      appid:379020,
      bk_keylist:['银魂','arashi'],
      bk_length:600

    }
  },
  mounted:function(){
    let _this=this;
    this.$nextTick(function(){
     _this.get_res();
    })
  },
  methods:{
  async get_res(){
      // 1.单个请求如下
      // let params={scope:this.scope,format:this.format,appid:this.appid,bk_key:this.bk_keylist[0],bk_length:this.bk_length}
      // this.$axios.get('api/openapi/BaikeLemmaCardApi',params).then((res)=>{
      //   console.log(res);
      //   this.detail=res.data;
      // })

      // 2.post请求测试，测试接口允许post方法，也正确返回了，说明post也没问题
      // let params={scope:this.scope,format:this.format,appid:this.appid,bk_key:this.bk_keylist[0],bk_length:this.bk_length}
      // this.$axios.post('api/openapi/BaikeLemmaCardApi',params).then((res)=>{
      //   console.log(res);
      //   this.detail=res.data;
      // })



      // 3.并发多个请求如下
      // let params1={scope:this.scope,format:this.format,appid:this.appid,bk_key:this.bk_keylist[0],bk_length:this.bk_length}
//       let params2={scope:this.scope,format:this.format,appid:this.appid,bk_key:this.bk_keylist[1],bk_length:this.bk_length}
//
//   let [pageRes, countRes] = await Promise.all([
//     this.$axios.get('api/openapi/BaikeLemmaCardApi',params1),
//
//     this.$axios.get('api/openapi/BaikeLemmaCardApi',params2),
// ])
// console.log(pageRes);
// console.log(countRes);

//上面测试请求接口突然不允许跨域请求了，换一个
      let params={type:'yuantong',postid:'11111111111'}
      this.$axios.post('api/query',params).then((res)=>{
      console.log(res);
      })
  },

    del_limit(){
      this.isActive=false;
    },
    open_photo(){
      let pswpElement = document.querySelectorAll('.pswp')[0],
  options = {
      // index: index, // start at first slide
      history: false,
      focus: true,
      showAnimationDuration: 0,
      hideAnimationDuration: 0
  };
  // Initializes and opens PhotoSwipe
  let gallery = new PhotoSwipe( pswpElement, UI, items, options )
  gallery.init()

}
// close( {
//   this.photoswipe.close()
// }

  },
  components:{//将头部和尾部注册为局部组件
  // layout,

  }
}
</script>

<style lang="less" scoped>
.detail{
  padding-bottom: 100px;
  .basic{//这个类作为基础来设，下面reason等类需要用到直接调用即可
    padding:0 43px;
    background: #fff;
  }
  .banner-img{
     width: 750px;
     height:478px;
  }
  .head{
    background-color: #fff;
    padding-left: 43px;
    .name_warp{
      display: flex;//弹性盒子，下面justify-content和align-items都是基于弹性盒子使用的
      justify-content: space-between;
      //justify-content属性定义了项目在主轴上的对齐方式。space-between：两端对齐，项目之间的间隔都相等。
      min-height: 66px;
      padding: 21px 43px 14px 0;
      align-items: center;//设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式为集中在居中
      border-bottom: 1px solid #e0e0e0;/*no*/ //这里不让border px被转换成rem
      .name{
        font-size: 30px;
      }
    }
    .commision_wrap{
      color: #c70025;
      padding-bottom: 20px;
      .average_price{
        font-size: 30px;
        padding: 15px 0;
      }
      .commission_rate{
        position: relative;
        //这里设定父类为相对定位，是为了让下面的子类commision_icon相对commission_rate定位
        font-size: 22px;
        padding-right: 43px;
        margin-left: 30px;
        line-height: 1.5;
        .commision_icon{
          position: absolute;//相对父类commission_rate来绝对定位
          top: 6px;
          left: -30px;
          width: 22px;
          height: 22px;
          background: url('../assets/commission.png') no-repeat;
          //这里的图片路径在本地暂时没有问题，据说打包之后会有问题，到时注意
          background-size: 22px 22px
        }
          }
    }
  }
  .mt-8{
    margin-top: 8px;
  }
  .reason{
    .basic;//调用上面设的的basic类
    .mt-8;
    padding-bottom: 4px;
    .title{
      font-size: 26px;
      display: flex;
      align-items: center;
      padding: 22px 0 24px;
      .icon{
        background: url('../assets/reason_icon.png') no-repeat;
        background-size: 31px 36px;
        margin-top: -6px;
        width: 31px;
        height: 36px;
        margin-right: 10px;
        }
    }
    .reason_detail{
      font-size: 22px;
      .item{
        display: flex;//设为弹性盒子，这样里面的项目可以通过是设置flex来设置伸缩比
        margin-bottom: 16px;
        line-height: 1.2;
        .content{
          flex:1;
          //flex是属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
          //flex属性用来控制弹性盒子里面项目的宽度伸缩比
          // 这里就是设置了content的flex-grow为1，作用是使得理由的span内容换行时,理由一的span不会被挤而换行
          //亲测把显示理由几的span设置flex-shrink为0是同样的效果，即空间不够使也不缩小
        }
      }
    }

  }
  .msg{//其实这个类和上面的reason类除了icon的路径不一样其他全部一样，后面记得弄个函数来减少代码冗余
    .basic;//调用上面设的的basic类
    .mt-8;
    padding-bottom: 4px;
    .title{
      font-size: 26px;
      display: flex;
      align-items: center;
      padding: 22px 0 24px;
      .icon{
        background: url('../assets/info_icon.png') no-repeat;
        background-size: 31px 36px;
        margin-top: -6px;
        width: 31px;
        height: 36px;
        margin-right: 10px;
        }
    }
    .msg_detail{
      font-size: 22px;
      .item{
        display: flex;
        margin-bottom: 16px;
        line-height: 1.2;
        .content{
          flex:1;
        }
      }
    }
    .path{
      display: flex;
      .item{
        margin-left: 13px;
        .img-wrap>img{
          width: 302px;
          height: 181px;

        }
        .type{
          font-size: 22px;
          margin-top: 6px;
          border: 1px solid #e0e0e0;/*no*/
          text-align: center;
        }
      }

    }

  }

  .door{//其实这个类和上面的reason类除了icon的路径不一样其他全部一样，后面记得弄个函数来减少代码冗余
    .basic;//调用上面设的的basic类
    .mt-8;
    padding-bottom: 4px;
    .title{
      font-size: 26px;
      display: flex;
      align-items: center;
      padding: 22px 0 24px;
      .icon{
        background: url('../assets/door_icon.png') no-repeat;
        background-size: 31px 36px;
        margin-top: -6px;
        width: 31px;
        height: 36px;
        margin-right: 10px;
        }
    }
    .door_detail{
      display: -webkit-box;//这里设置了才会横向排列
      overflow-x: scroll;
      overflow-y: hidden;


      .item{
        width: 302px;
        margin-bottom: 24px;
        .img-wrap>img{
          border: 1px solid #e0e0e0;/*no*/
          display: block;//为什么要设置为块状？
          width: 302px;
          height: 264px;
        }

        .type{
          font-size: 22px;
          margin-top: 6px;
          border: 1px solid #e0e0e0;/*no*/
          text-align: center;
          >p{line-height: 30px;}
        }
      }
      .item:nth-child(n+2){  margin-left: 13px;}//表示给大于等于2的item添加左边距

    }

  }

  .facilities{
    .basic;//调用上面设的的basic类
    .mt-8;
    padding-bottom: 4px;
    .title{
      font-size: 26px;
      display: flex;
      align-items: center;
      padding: 22px 0 24px;
      .icon{
        background: url('../assets/facilities_icon.png') no-repeat;
        background-size: 31px 36px;
        margin-top: -6px;
        width: 31px;
        height: 36px;
        margin-right: 10px;
        }
    }
    .facilities_detail>p{
      font-size: 22px;
      line-height: 1.4
    }

  }
  .basic_info{
    .basic;//调用上面设的的basic类
    .mt-8;
    padding-bottom: 4px;
    .title{
      font-size: 26px;
      display: flex;
      align-items: center;
      padding: 22px 0 24px;
      .icon{
        background: url('../assets/basic_info.png') no-repeat;
        background-size: 31px 36px;
        margin-top: -6px;
        width: 31px;
        height: 36px;
        margin-right: 10px;
        }
    }
    .basic_detail{
      fontsize:26px;
      display:flex;
      flex-wrap: wrap;//换行
      .item{
        width:50%;
        margin-bottom: 16px;
      }
      .item:nth-child(2n){text-align: right;}

      // 也可以向下面这样写
      // :nth-child(2n){
      //   text-align: right;
      // }
      // .item:extend(:nth-child(2n)){}//nth-child选择器这样调用，表示偶数的item的文本右对齐

    }


  }
  .disclaimer{
    padding: 7px 43px 14px;
    font-size: 22px;
    line-height: 34px;
  }
  // .jinggao-icon{
  //   font-size: inherit !important;//强制更改yd-icon的大小与字体一致
  // }

  .tips-limit-1{//这个类的作用是限制显示高度，溢出的隐藏，点击展开的时候，去除这个类即可
    height:46px;
    overflow: hidden;
  }
  .show-tips{
    font-size: 18px;
    padding-bottom: 10px;
    color: #c70025;
    text-align: center;

   }





  .footer{
    position: fixed;
    bottom: 0;
    font-size: 22px;
    width: 100%;
    background-color: #fff;
    display: flex;
    .phone-wrap{
      width: 165px;
      text-align: center;
      .phone{
        width: 55px;
        height: 38px;
        background: url('../assets/phone.png') no-repeat;
        background-size: 55px 38px;
        margin: 16px auto 10px;
      }

    }
    .collect-wrap{
      width: 165px;
      padding-left: 38px;
      .un-collect{
        width: 41px;
        height: 39px;
        background: url('../assets/un-collect.png') no-repeat;
        background-size: 41px 39px;
        margin: 16px 8px 4px;

      }
      .collect{
        width: 41px;
        height: 39px;
        background: url('../assets/collect.png') no-repeat;
        background-size: 41px 39px;
        margin: 16px 8px 4px;

      }

    }
    .rec-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      line-height: .98rem;
      font-size: .3rem;
      background: #c70025;
      flex: 1;
      .rec{
        width: 37px;
        height: 98px;
        background: url('../assets/rec.png') no-repeat 0 22px;
        //0 22表示背景图片的横纵坐标，（0，0）表示的是背景图片的左上角，这里作用是使背景下移22px
        background-size: 37px 42px;
        margin-right: 20px;

      }


    }


  }

}


</style>
