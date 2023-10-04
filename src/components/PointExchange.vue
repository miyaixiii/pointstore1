<template>
    <div id="title">
      <h1>點數發放</h1>      
    </div> 
    <div id="alert">
      <h2>用戶電話</h2>
      <div class="phone"><input type="number"></div>
    </div>
    <router-link to="/InputAmount"><input type="button" value="送出" id="submit"></router-link>
    


</template>
  
<script>
  export default {
    name: 'PointPage',
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
    height: auto;
    margin: 200px auto 30px auto;
    padding: 20px 0px 30px 0px; 
  }

  h2{
    text-align: center;
    font-size: 30px;
  }
  #submit{
    justify-items: center;
    align-items: center;
    border-radius: 20px;
    background-color: #ed8080;
    color:black;
    font-weight:bolder;
    border-color: lightgray;
    border-style: hidden;
    font-size: 20px;
    height: 50px;
    width: 100px;

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
  
  input{
  border-style: none;
  border-radius: 5px;
  height: 26px;  
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
    margin-bottom: 5px;
  }
</style>