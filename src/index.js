import './styles/theme.scss';
import Vue from 'vue';
import App from './components/App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckSquare);
library.add(faSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
});

const body = document.getElementsByTagName('body')[0];
const app = document.createElement('div');
app.setAttribute('id', 'app');
body.insertBefore(app, body.firstChild);

new Vue({
    el: '#app',
    render: h => h(App),
});
