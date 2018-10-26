import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueLocalStorage)
window.axios = axios

Vue.component('my-modal', {
  template: `
  
  <div class="modal is-active" >
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class = "box">
   <slot></slot>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `
});

Vue.component('mydelete-modal', {
  template: `
  
  <div class="modal is-active" >
  <div class="modal-background"></div>
   <slot></slot>
  </div>
  `
})


var app = new Vue({
  el: '#app',

  render: h => h(App)

})


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datefield").setAttribute("min", today);