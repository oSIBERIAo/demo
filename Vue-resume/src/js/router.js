
const Tab1 = { template: '<div>Tab1</div>' }
const Tab2 = { template: '<div>Tab2</div>' }


const routes = [
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 }
]


const router = new VueRouter({
  routes: routes
})


const app = new Vue({
  router: router,
  el: '#app'
})
