require('./bootstrap');
import  Vue from  'vue'    
Vue.component('main-page', require('./components/MainPage.vue').default);
const app = new Vue({
    el: '#app'
});
