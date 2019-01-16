import './styles/theme.scss';
import Vue from 'vue';
import App from './components/App.vue';

navigator.serviceWorker.register('/service-worker.js');

new Vue({
    el: '#app',
    render: h => h(App),
});