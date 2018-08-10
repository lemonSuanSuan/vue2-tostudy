import Vue from 'vue'
import vuex from 'vuex'
// 引入 axios
import axios from '../utils/http'

Vue.use(vuex);



export default new vuex.Store({
    state:{//类比data去理解
        count:0,
        username:'',

        //myvuex.vue的数据
        list:[],//所有商品列表
        cartlist:[],//添加到购物车列表


    },

    getters:{//类比computed去理解，对于针对数据的简单操作可在这里实现
      //vue中的 computed不建议用箭头函数，这里不知道,亲测用了也行，目前没发现问题
      addone(state){return state.count+1},
      //获取购物车详细列表,就是根据cartlist的id去list拿到详细列表而已
      shopcartlist:state=>{return state.cartlist.map(item=>{
        let product=state.list.find(n=>n.id==item.id);
        console.log("打印购物车详细"+product);
        if(product){
          return {
            ...product,
            count:item.count
          }
          }
          }
        )},

      //获取购物车总数
      totalCount:(state,getters)=>{
        let total=0;
        getters.shopcartlist.map(item=>{
          total+=item.count;
        });
        console.log("总数"+total);
        return total;
      },
      //获取购物车金额
      totalPrice:(state,getters)=>{
        let total=0;
        getters.shopcartlist.map(item=>{
          total+=item.count*item.price;
        });
        console.log("金额"+total);
        return total.toFixed(2);
      }

    },

    mutations:{//真正改变state数据的操作
      //偷懒可以用箭头函数，相当于increment(state){return state.count++}
      increment:state=>state.count++,
      decrement:state=>state.count--,
      chageusername:(state,name)=>state.username=name,
      //获取商品列表
      getlist:(state,results)=>{state.list=results},

      //添加到购物车,数量增加
      addtocart:(state,item)=>{
        //是否已存在购物车，es6的find方法根据回调函数找到第一个符合的元素并返回
        let record=state.cartlist.find(n=>{return n.id==item.id});
        console.log("打印"+record);
        if(!record){//不存在，那么添加到购物车
          state.cartlist.push({id:item.id,count:1});
          // console.log("商品列表"+JSON.stringify(state.list));
          console.log("购物车"+JSON.stringify(state.cartlist));
        }else{
          //存在,数量++
          record.count++;
        }
      },
      //购物车单个物品数量减少
      delfromcart:(state,item)=>{
        let record=state.cartlist.find(n=>{return n.id==item.id});
        console.log("购物车"+JSON.stringify(item));
        console.log("购物车"+JSON.stringify(state.cartlist));
        console.log("购物车"+JSON.stringify(state.record));
        // console.log(record.count);
        if(record.count>=2){
          record.count--;
        }else{
          let recordIndex=state.cartlist.findIndex(n=>{return n.id==item.id});
          state.cartlist.splice(recordIndex,1);
        }
      },
      //清空购物车
      clearcart:(state)=>{
        state.cartlist=[];
      }



    },

    actions:{//提交mutations,在组件中通过dispatch触发mutations的commit
      //下面的context和我们使用的$store拥有相同的对象和方法
      changeusername:(context,name)=>context.commit('chageusername',name),
      getlist: context=>{
    //开发环境可以使用这样的方式获取，但是打包发布后是请求不了的，为了打包发布后也能显示数据在catch里拿一下本地json
        axios.get('static/json/shopping.json').then(res=>{
          console.log(res);
          let results=res.data.data;
          context.commit('getlist',results);
        }
      ).catch((e)=>{
        let res=require('../assets/json/shopping.json');
        console.log(JSON.stringify(res));
        let results=res.data;
          context.commit('getlist',results);
      })

    },
    //添加到购物车
    addtocart:(context,item)=>{context.commit('addtocart',item)},
    //删减购物车单个商品
    delfromcart:(context,item)=>{context.commit('delfromcart',item)},
    //清空购物车
    clearcart:context=>context.commit('clearcart')
    }

})
