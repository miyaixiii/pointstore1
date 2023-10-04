<template>
    <div class="bk">
        <header class="hd"><a href="/"><img class="img" src="../assets/cancel.png" width="50"></a></header>
        <h2>申請加入 集集復集集 集點平台</h2>
        <p>各位業者您好：請配合填寫以下資訊，，以利集集復集集集點平台進行審核，有任何問題歡迎來信，期待與您的合作。
            我們的信箱：
            pointcollect@gmail.com</p>
        <div class="cont">
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
                <tr class="box1">
                    <td><input type="time" class="box1" v-model="storetime1"></td>
                    <td>~</td>
                    <td><input type="time" class="box1" v-model="storetime2"></td>
                </tr>
            </table>
            <p>店家位址</p>
            <input type="text" class="box" v-model="storelocation">
            <table>
                <tr>
                    <td>
                        <p>集點卡圖片</p>
                    </td>
                    <td><input type="file"></td>
                </tr>
            </table>
            <button class="btupload">上傳</button><br>

            <input type="checkbox" v-model="ischeck">我已閱讀公開說明書
            <table>
                <tr>
                    <td><button class="btclean" @click="clearInputs">清除</button></td>
                    <td><button class="btsubmit" @click="submit">送出</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const storename = ref('');
        const username = ref('');
        const usergmail = ref('');
        const userphone = ref('');
        const storephone = ref('');
        const storetime1 = ref('');
        const storetime2 = ref('');
        const storelocation = ref('');

        const clearInputs = () => {
            storename.value = '';
            username.value = '';
            usergmail.value = '';
            userphone.value = '';
            storephone.value = '';
            storetime1.value = '';
            storetime2.value = '';
            storelocation.value = '';
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
.bk {
    margin: auto;

    height: auto;
    width: auto;
    background-color: #D8D8D8;
    margin-bottom: 80px;
    padding-bottom: 70px;
}

table {
    margin-left: auto;
    margin-right: auto;
}

.img {
    float: right;
}

.hd {

    background-color: #98CAF9;
    height: 50px;
}

.btupload {
    background-color: #ed8080;
    border-style: none;
    border-radius: 5px;
    font-size: 25px;
}

.btclean {
    border-style: none;
    background-color: #BDBDBD;
    font-size: 25px;
    border-radius: 5px;
    position: absolute;
    left: 25%;
    margin: 25px;
}

.btsubmit {
    border-style: none;
    background-color: #98CAF9;
    border-radius: 5px;
    font-size: 25px;
    position: absolute;
    left: 45%;
    margin: 25px;
}

.box {
    width: 250px;
    height: 30px;
    border-style: none;
}

.box1 {
    width: 150px;
    height: 30px;
    border-style: none;
}</style>