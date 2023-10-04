<script setup>

</script>

<template>
    <footer class="footer">
      <div class="footer-icons">
        <div class="footer-icon">
          <a href="/PointExchange"><img src="../assets/point.png" alt="點數" /></a>
          <span>點數</span>
        </div>
        <div class="footer-icon">
          <a href="/StoreAchievement"><img src="../assets/store.png" alt="主頁" /></a>          
          <span>主頁</span>
        </div>
        <div class="footer-icon">
          <a href="/DistributionRecord"><img src="../assets/history.png" alt="紀錄" /></a>
          <span>紀錄</span>
        </div>
      </div>
    </footer>
  </template>
  
  <style>
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