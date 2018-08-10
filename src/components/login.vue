<template lang="html">
  <div>
    <section class="login">
      <!-- 这里使用数组三元表达式来切换样式 -->
      <div class="login-tabs" :class="[ isActive ?'password': 'sms']">
        <div class="login-tabs-item" @click="select_loginway(false)">验证码登录</div>
        <div class="login-tabs-item" @click="select_loginway(true)">密码登陆</div>
      </div>
      <div class="login-cell-group">
        <div class="login-cell-item">
          <div class="login-cell-account"></div>
           <yd-input type="tel" required v-model="user_login.phone" :show-success-icon="false" :show-error-icon="false" :placeholder="[isActive ? '请输入手机号或者账号':'请输入手机号']"></yd-input>
        </div>
        <div class="login-cell-item">
          <div class="login-cell-password"></div>
          <yd-input slot="right" type="password" v-model="user_login.password" placeholder="请输入密码"></yd-input>
           <yd-button bgcolor="#c70025" type="warning" class="sendcode" @click.native="get_Captcha">获取验证码</yd-button>
        </yd-cell-item>
        </div>
        <yd-button class="btn-submit" :disabled="!user_login.phone || !user_login.password"size="large" type="danger"  @click.native="login">登陆</yd-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isnull:1,
      isActive:true,
      user_login:{
        phone:'',
        password:''
      },
      //请求参数
      scope:103,
      format:"json",
      appid:379020,
      bk_keylist:['银魂','arashi'],
      bk_length:600

    }
  },
  methods:{
    select_loginway(flag){
        this.isActive=flag;
    },

 // 判断是否为手机号
  isPoneAvailable: function (pone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
      return false;
    } else {
      return true;
    }
  },
  get_Captcha(){
    let phoneaval=this.isPoneAvailable(this.user_login.phone);
    if(phoneaval){
      let params={'phone':this.user_login.phone}
      this.$axios.post('/api/agent.getCaptcha',params).then(res=>{
        console.log(res);
      })
    }
    else {
      this.$dialog.notify({
                    mes: '请输入合法11位手机号',
                    timeout: 5000,
                });
    }
  },
  //下面保存一下登陆账号和密码，可根据需求保存登陆成功后返回的需要用到的信息
  // 1）首先登陆成功后触发保存基础信息到localStorage,就是在请求的then()方法里写就好

  login(){
      let params={type:'yuantong',postid:'11111111111'}
      this.$axios.post('api/query',params).then((res)=>{
        // console.log(res);
    // if(res.data.errno!==0){//这里应该根据后台判断返回成功的条件，比如时代+的code==0000为成功。这里是因为测试接口返回是这样所以只能判断。
      console.log("请求成功才会进入吧是吧");
      console.log(res);

      let token='16BCFFF714658A53BA4296E81';//因为没有后台来返回tokenId，所以自己弄个变量lai模拟

      const userInfoState = localStorage.getItem('userInfoState');
      let userInfo=this.user_login;
        if (userInfoState) {
           // 如果本地存在 userInfoState 将其移除
           localStorage.removeItem('userInfoState');
        }
        localStorage.setItem('userInfoState', JSON.stringify({
           userInfo,
           timestamp: new Date().getTime()
        }));

        if(localStorage.getItem('tokenId')){
          // 如果本地存在 tokenId 将其移除
          localStorage.removeItem('tokenId');
        }
        localStorage.setItem('tokenId', JSON.stringify(token));
        this.$router.push({path: '/'})
    // }
  })
    }


  }
}
</script>

<style lang="less" scoped>
.btn-submit {
    width: 244px;
    font-size: 28px;
    line-height: 64px;
    height: 64px;
    border-radius: 50px;
    margin-top: 98px;
  }
  :disabled{//这样定义能在上面直接判断能不能使用？不是很明白
    background: #e08080;
  }
.login{
  background: url('../assets/login/bg-login.jpg') #fff no-repeat;
  background-size: 100% 345px;
  padding-top: 260px;
  padding-bottom: 100px;
  .login-tabs{
    font-size: 35px;
    color: red;
    display: flex;
    height: 85px;
    position: relative;
    .login-tabs-item{
      flex: 1;//使得login-tabs-item宽度占比为1:1
      text-align: center;
    }

  }
  .password::before{
    transform: translateX(562.5px);
  }
  .sms::before{
    transform: translateX(187.5px);
  }
  .login-tabs::before{//伪元素
    content: '';
    border-top: 24px solid transparent;
    border-left: 24px solid transparent;
    border-right: 24px solid transparent;
    border-bottom: 24px solid #fff;
    position: absolute;
    left: -24px;
    bottom: 0;
    width: 48px;
    height: 48px;
    transition: transform .5s;//设置过度属性和过度时间


 }
 .login-cell-group{
   margin-left: 88px;
   margin-right: 88px;
   margin-top: 66px;
   .login-cell-item{
     border:1px solid #e0e0e0;/*no*/
     border-radius: 50px;
     display: flex;
     align-items: center;
     position: relative;
     padding: 15px 30px;
     margin-top: 64px;
     .login-cell-account{
       width: 40px;
       height: 34px;
       background: url('../assets/login/account.png') #fff no-repeat;
       background-size: 31px 34px;
     }
     .login-cell-password{
       width: 40px;
       height: 34px;
       background: url('../assets/login/account.png') #fff no-repeat;
       background-size: 31px 34px;
     }
     .yd-input{
       padding-left: 80px;
     }
     .sendcode{
       position: absolute;
       width: 5.5em;
       height: 1.80em;
       bottom: 34px;
       right: 20px;
       transform: translateY(50%);
       z-index: 6;

     }
   }
 }

}

</style>
