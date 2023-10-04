<template>
    <div class="point-records">
    <div id="title">
      <h1>點數發放紀錄</h1>
    </div>
    <br><br><br><br><br>
      <div v-for="record in pointRecords" :key="record.id" class="record">
        <div class="avatar">
          <img :src="record.avatar" alt="頭像" />
        </div>
        <div class="member-id">{{ record.memberId }}</div>
        <div class="date">{{ record.date }}</div>
        <div class="points">
          <span :class="record.points > 0 ? 'increase' : 'decrease'">{{ record.points }}</span>
        </div> 
      </div>
    </div>

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
          <router-link :to="'/DistributionRecord'"><img src="../assets/history.png" alt="紀錄" /></router-link>
          <span>紀錄</span>
        </div>
      </div>
    </footer>

  </template>
  
  <script>
  import avatar1 from '../assets/YB.png';
  import avatar2 from '../assets/AG.png';
  import avatar3 from '../assets/OG.png';
  import avatar4 from '../assets/BB.png';
  import avatar5 from '../assets/AB.png';

  export default {
    data() {
      return {

        pointRecords: [
          {
            id: 1,
            avatar: avatar1,
            memberId: '0911222333',
            date: '2023-07-01',
            points: 10
          },
          {
            id: 2,
            avatar: avatar2,
            memberId: '091235678',
            date: '2023-07-02',
            points: -5
          },
          {
            id: 3,
            avatar: avatar3,
            memberId: '090075235',
            date: '2023-07-02',
            points: 3
          },
          {
            id: 4,
            avatar: avatar4,
            memberId: '0987654321',
            date: '2023-07-03',
            points: 12
          },
          {
            id: 5,
            avatar: avatar5,
            memberId: '0933222111',
            date: '2023-07-05',
            points: -7
          },
          // 其他點數紀錄
        ]
      };
    }
  };
  </script>
  
  <style>
  .point-records {
    text-align: center;
  }
  #title{
    background-color: lightgray;
    width: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
  }
  
  .record {
    display: flex;
  align-items: center;
  margin-bottom: 20px;
  }
  .record:not(:last-child) {
  border-bottom: 1px solid #000;
}
  
  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .member-id{
    font-size: 20px;
    position: absolute;
    margin-left: 20%;
}
  .date {
    font-size: 20px;
    position: absolute;
    margin-left: 55%;
}
  .points {
    font-size: 20px;
    margin-left: auto;
}
  
  .increase {
    color: green;
  }
  
  .decrease {
    color: red;
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