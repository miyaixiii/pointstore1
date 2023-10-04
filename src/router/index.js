import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'UsersView',
    component: () => import('../views/UsersView.vue')
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/StoreAchievement',
    name: 'StoreAchievement',
    component: () => import('../views/StoreAchievement.vue')
  },
  {
    path: '/ActivityView',
    name: 'ActivityView',
    component: () => import('../views/ActivityView.vue')
  },//
{
    name: 'PointExchange',
    path:'/PointExchange',
    component:() => import('../components/PointExchange.vue')
},
{
    name: 'InputAmount',
    path:'/InputAmount',
    component:() => import('../components/InputAmount.vue')
},
{
    name: 'FooterIcon',
    path:'/FooterIcon',
    component:() => import('../components/FooterIcon.vue')
},
{
  name: 'ProblemReport',
  path:'/ProblemReport',
  component:() => import('../components/ProblemReport.vue')
},
{
  name: 'DistributionRecord',
  path:'/DistributionRecord',
  component:() => import('../components/DistributionRecord.vue')

},
{
  name: 'ChangeView',
  path:'/ChangeView',
  component:() => import('../views/ChangeView.vue')

}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
