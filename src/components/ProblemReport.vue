<template>
    <div id="title">
      <h1>店家問題反饋</h1>      
    </div><br><br><br><br>
    <div class="container">
    <h2>主旨</h2>
    <input type="text" v-model="subject" />
    <h2>問題闡述</h2>
    <textarea v-model="description"></textarea>
  </div>


  <button @click="showAlert" class="submit" >送出</button>


</template>
  



<script>

export default {
  data() {
    return {
      subject: '',
      description: ''
    };
  },
  methods: {
    showAlert() {
      alert('已送出問題回饋表！將有專人為您服務!');
    }
  },
};


</script>

<style>
.container {
    margin: 20px;
  }
#title{
    background-color: lightgray;
    width: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
  }
h2 {
  font-size: 25px;
  margin-top: 20px;
}
input{
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
}
textarea {
  width: 100%;
  height:300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
}
.submit{
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: red;
    color: white;
    font-weight:bolder;
    border-color: lightgray;
    border-style: hidden;
    font-size: 20px;
    height: 50px;
    width: 100px;
    margin-top: 25px;
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
    margin-bottom: 5px;
  }
</style>