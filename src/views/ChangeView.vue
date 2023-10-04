<template>
<header class="header"><h1>修改資料</h1></header>
<div class="backbox">
<div class="scrollbox">

    <p>店家名稱</p>
        <input type="text" class="box" v-model="storename">
        <p>負責人姓名</p>
        <input type="text" class="box" v-model="username">
        <p>負責人信箱</p>
        <input type="text" class="box" v-model="usergmail">
        <p>負責人連絡電話</p>
        <input type="text" class="box" v-model="userphone">
        <p>餐廳連絡電話</p>
        <input type="text" class="box" v-model="storephone">
        <p>營業時間</p>
        <table>
            <tr>
                <td><input type="time" class="box1" v-model="storetime1"></td>
                <td>~</td>
                <td><input type="time" class="box1" v-model="storetime2"></td>
            </tr>
        </table>
        <p>店家位址</p>
        <input type="text" class="box" v-model="storelocation">
        <div class="picture">
            <p>集點卡圖片</p>
            <input type="file">
        </div>
        <button class="btupload">上傳</button><br>
        <div class="read">
            <input type="checkbox" v-model="ischeck">我已閱讀公開說明書
        </div>
        <div class="checkbox1">
            <button class="btclean" @click="clearInputs">清除</button>
            <button class="btsubmit" @click="submit">確認修改</button>
        </div>
    </div>
</div>
    
</template>
<script>
import { ref } from 'vue';


export default {
  setup() {
    const storename =ref('');
    const username = ref('');
    const usergmail = ref('');
    const userphone = ref('');
    const storephone = ref('');
    const storetime1 = ref('');
    const storetime2 = ref('');
    const storelocation = ref('');

    const clearInputs = () => {
      storename.value='';  
      username.value = '';
      usergmail.value = '';
      userphone.value = '';
      storephone.value = '';
      storetime1.value = '';
      storetime2.value = '';
      storelocation.value='';
    };

    return {
      clearInputs,
      storename,
      username,
      usergmail,
      userphone,
      storephone,
      storetime1,
      storetime2,
      storelocation,
      ischeck,
      submit
    };
  }
};

const ischeck = ref(false);
const submit = () => {
      if (!ischeck.value) {
        window.alert('請先同意條款');
      } else {
        // 在这里执行提交操作
        console.log('提交表单');
      }
    };
</script>

<style scoped>
.header{
    background-color: lightgray; 
    width: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
}
.img{
  float: right;
}
.hd{

    background-color: #98CAF9;
    height: 50px;

}
.btupload{
    background-color: #ed8080;
    border-style: none;
    border-radius: 5px;
    font-size: 25px;

}
.btclean{
    border-style: none;
    background-color: #BDBDBD;
    font-size: 25px;
    border-radius: 5px;
    width: auto;
    margin: 10px;
}
.btsubmit{
    border-style: none;
    background-color: #98CAF9;
    border-radius: 5px;
    font-size: 25px;
    width: auto;
    margin: 10px;
}
.bk{
    height: 100%;
    width: auto;
    background-color: #D8D8D8;
    margin-bottom: 100px;
    
}
.box{
    width: 250px;
    height: 25px;

}
table{
    margin-left: auto;
    margin-right: auto;
}
.box1{
    width: 150px;
    height: 30px;
    text-align: center;
    justify-items: center;
}

.scrollbox{
    overflow-y: auto;
    height: 700px;
}
.picture{
    display: flex;
    flex-direction: column;
    align-items: center;    
    margin: 10px 0px 10px 0px ;
}
.checkbox1{

    margin-left: auto;
    margin-right: auto;

}
</style>