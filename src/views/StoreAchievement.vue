<template>
    <header class="header"><h1>店家管理</h1></header>
    <h2>本月已發放點數</h2>
    <table>
        <tr>
            <td><img src="../assets/point.png" width="50"></td>
            <td><p>123</p></td>
        </tr>
    </table>
    <hr>
    <h2>本月累積抽成</h2>
    <table>
        <tr>
            <td><img src="../assets/dollar.png" width="50"></td>
            <td><p>123</p></td>
        </tr>
    </table>
    <hr>
    <table class="memset">
        <tr>
            <td><img src="../assets/user.png" width="50"></td>
            <td>更改基本資訊</td>
            <td><a href="/ChangeView"><img class="enter" src="../assets/next.png" width="30"></a></td>
        </tr>
        <tr>
            <td><img src="../assets/rest.png" width="50"></td>
            <td>  <p v-if="good" class="run">營業中</p><p v-else class="rest">休息中</p></td>
            <td><button @click="toggle" class="btt">切換狀態</button></td>
        </tr>
        <tr>
            <td><img src="../assets/surprise-box.png" width="50"></td>
            <td>活動申請</td>
            <td><a href="/ActivityView"><img  class="enter" src="../assets/next.png" width="30"></a></td>
        </tr>
        <tr>
            <td><img src="../assets/question.png" width="50"></td>
            <td>問題回饋</td>
            <td><a href="/ProblemReport"><img  class="enter" src="../assets/next.png" width="30"></a></td>
        </tr>

    </table>

</template>
<script setup>
import { ref} from 'vue'
const good=ref(true)
function toggle(){
  good.value=!good.value
}

</script>

<style>
td{
    
    padding: 10px;
}
.header{
    background-color: lightgray;
    width: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
}
.memset{
    text-align: center;

}
.btt{
    border-style: none;
    background-color: #BDBDBD;
    padding: 15px;
    border-radius: 5px;
}
.run{
    color:rgb(22, 207, 145);
    font-weight: bolder;
    font-size: 20px;
}

.rest{
    color: rgb(226, 83, 83);
    font-weight: bolder;
    font-size: 20px;
}
</style>