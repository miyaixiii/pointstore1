<template>

<div class="bk">
    <header class="hd"><img class="img" src="../assets/cancel.png" width="50"></header>
    <h1 class="title">請先登入</h1>
        <h3 class="text">帳號</h3>
        <div class="content">
         <input class="box" type="text" v-model="text">
        </div>
        <h3 class="text">密碼</h3>
        <div class="content">
         <input class="box" type="text" v-model="text">
        </div>

    <p class="forget">忘記密碼</p>
        <table class="enter">
        <tr>
            <td><router-link to="/StoreAchievement"><button class="bt" type="submit">登入</button></router-link></td>
            <td><router-link to="/RegisterPage"><button class="bt1"  type="submit" on-click="/RegisterPage">註冊</button></router-link></td>
        </tr>
    </table>        

</div>

</template>

<script>
 export default {
  
};
</script>

<style>
.title {
    font-size: 40px;
    text-align: center;
}
.content{
    text-align: center;
    font-size: 25px;  
}
.box{
    width: 250px;
    height: 40px;
    border-style: none;
}
.bk{
    height: 500px;
    width: auto;
    background-color: #D8D8D8;
    position: relative; 
    
}

.hd{
    margin-top: 100px;
    background-color: #98CAF9;
    height: 50px;

}
.text{
    position: relative;
    
}
.forget{
    text-align: center;
    
}
.enter{
    position: relative;
    left: 20%;
}
.bt{

    font-size: 30px;
    font-weight: bolder;
    border-style: none;
    border-radius: 10px;
    background-color: #ed8080;
    margin: 20px;
}
.bt1{

font-size: 30px;
font-weight: bolder;
border-style: none;
border-radius: 10px;
background-color: #98CAF9;
margin: 20px;
}
.img{
  float: right;
}

</style>

