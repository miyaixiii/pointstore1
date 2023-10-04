<template>
    <div id="title">
      <h1>點數發放</h1>      
    </div>
    <div id="alert">
      <h2>&nbsp;用戶資訊</h2>
      <h2>&nbsp;User:&nbsp;0912345678</h2>
      <br>
      <h3><div class="point"><img src="../assets/point.png" alt="點數" />6008</div></h3>
      <h4>(可折抵60元)</h4>
    </div>

    <div id="int">
      <div id="input">
      輸入原消費金額<div id="notice">(必填)</div>
      <br>
      <input type="text" value="0" >
      <br>
      <br>
      輸入折扣金額<div id="notice">(選填)</div>
      <br>
      <input type="text" value="0" >
      </div>
    </div>
    <br>
    <input type="button" value="送出" id="submit">

    <footer class="footer">
      <div class="footer-icons">
        <div class="footer-icon">
          <router-link :to="'/PointExchange'"><img src="../assets/point.png" alt="點數" /></router-link>
          <span>點數</span>
        </div>
        <div class="footer-icon">
          <router-link :to="'/StoreAchievement'"><img src="../assets/store.png" alt="主頁" /></router-link>
          <span>主頁</span>
        </div>
        <div class="footer-icon">
          <router-link :to="'/RegisterPage'"><img src="../assets/history.png" alt="紀錄" /></router-link>
          <span>紀錄</span>
        </div>
      </div>
    </footer>


  </template>
  
  <script>
  export default {
    name: 'ProductsPage',
    components:{
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #title{
    background-color: lightgray;
    width: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
  }
  #alert{
    background-color: lightgray;
    width:80%;
    height: 30%;
    margin: 50px auto 20px auto;
    padding-bottom: 5px;
  }
  
  h2{
    display: flex;
    height: 30px;
    margin-top: 5px;
    text-align: left;
    font-size: 30px;
  }
  h3{
    font-size: 50px;
    margin-top: -10px;
    text-align: center;
    margin-right: 15%;
    margin-bottom: 15px;
  }
  h4{
    margin-top: -20px;
    text-align: center;
    font-size: 25px;
  }
  #submit{
    align-items: center;
    border-radius: 20px;
    background-color: lightgray;
    border-color: lightgray;
    border-style: hidden;
    font-size: 20px;
    height: 50px;
    width: 100px;
  }
  #int{
    font-size: 25px;
  }
  #input{
    justify-content: center;
    align-items: center;
    
  }
  input{
    width:85%;
    background-color: lightgray;
    border-style: none;
    font-size: 25px;  
  }
  #notice{
    color: red;
    position: relative;
    display: inline-flex;
    float: right;
    left: -15%;
  }
  
    .point img {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    padding-top: 0px;
  }
  .point{
    border-bottom: 10px;
  }


  .footer {
    background-color:#98CAF9;
    color: black;
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  
  .footer-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .footer-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-icon img {
    width: 30px;
    height: 30px;
  }
  </style>
  