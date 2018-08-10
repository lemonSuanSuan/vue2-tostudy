<template lang="html">
  <div class="plantwo">

    <div class="input">
      <div class="title">今日份笔记</div>
      <input type="text" placeholder="请输入标题" v-model="addnote.title">
      <yd-cell-group>
        <yd-cell-item>
            <yd-textarea v-model="addnote.context" slot="right" placeholder="请输入您的笔记" maxlength="400"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
      <div class="submit" @click="addlist">提交</div>
    </div>
    <div class="notelist">
      <div class="title">所有笔记</div>
      <yd-accordion>
        <yd-accordion-item v-for="item in notedata" :title="item.title">
          <div class="listitem">
            <p>{{item.context}}</p>
            <p>{{item.time}}</p>
          </div>
        </yd-accordion-item>
    </yd-accordion>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      addnote:{
        title:'',
        context:'',
        time:''

      },
      notedata:[],
      copynote:[],
    }
  },
  created(){
    let res=require('../assets/json/note.json');
    this.notedata=res.data;
  },
  methods:{
    addlist(){
      if(this.addnote.title||this.addnote.context){
      let mydate=new Date();
      this.addnote.time=mydate.toLocaleString();
      this.notedata.push(this.addnote);
      this.$dialog.toast({
                  mes: '保存成功',
                  timeout: 1500,
                  icon: 'success'
              });
      }else{
        this.$dialog.toast({
                    mes: '未填写相关信息',
                    timeout: 1500,
                });
      }

    }
  }
}
</script>

<style lang="less" scoped>
.plantwo{
  margin:10px;
  font-size: 16px;;
  .title{
    font-size: 40px;
    width:250px;
    height: 60px;
    line-height: 60px;
    background: rgba(141, 175, 202, 0.59);
    border-top-right-radius: 50px;

  }
  .input{
    position: relative;
    margin-bottom: 10px;
    height: 470px;;

    input{
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
      color: inherit;
      width: 400px;
      background: #fff;
      font-size: 30px;
    }
    .submit{
      position: absolute;
      right:60px;
      width: 80px;
      height: 60px;
      line-height: 60px;
      background: rgba(141, 175, 202, 0.59);
      text-align: center;
    }
  }
  .notelist{

    .listitem{
      line-height: 1.5;
      padding: 20px 10px;

    }

  }
}

</style>
