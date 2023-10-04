<template>
<header class="header"><h1>活動申請
</h1></header>
<h2>瘋狂點點名</h2>
<table>
    <tr>
        <td>點數數量</td>
        <td><input type="text"></td>
    </tr>
    <tr>
        <td>發放名額</td>
        <td><input type="number"></td>
    </tr>
    <tr>
        <td>發放日期</td>
        <td><input type="date"></td>
    </tr>
</table>
<button class="submit1">送出</button>
<div class="down">
    <h1>首頁輪播廣告</h1>
    <table>
        <tr>
            <td>照片上傳</td>
            <td><input type="file"></td>
        </tr>
    </table>
    <button class="submit2">送出</button>
</div>
</template>

<style>
.header{
    background-color: lightgray;
    width: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
}
td{
    padding:15px;
    
}
.submit1{
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
    margin: 15px;
}
.submit2{
    justify-items: center;
    align-items: center;
    border-radius: 20px;
    background-color:  #98CAF9;
    color:black;
    font-weight:bolder;
    border-color: lightgray;
    border-style: hidden;
    font-size: 20px;
    height: 50px;
    width: 100px;
    margin: 15px;
}
.down{
    background-color: #dbd6d6;
}
</style>