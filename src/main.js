import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import globalCss from './globalCss/globalCss.css'
import animations from './globalCss/animations.css'
//////////////////////////////////////////////////
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

Vue.mixin({
  created: function () {
    this.gsap = gsap;
  }
});




Vue.config.productionTip = false

new Vue({
  globalCss,
  animations,
  router,
  store,
  render: h => h(App)
}).$mount('#app')