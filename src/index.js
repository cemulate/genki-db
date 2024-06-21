import './styles/theme.scss';
import Vue from 'vue';
import App from './components/App.vue';

import Plausible from 'plausible-tracker';
Plausible({
    domain: 'cemulate.github.io/genki-db',
    apiHost: 'https://plausible.351321.xyz',
}).enableAutoPageviews();

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckSquare);
library.add(faSquare);
library.add(faExternalLinkAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js');
});

const body = document.getElementsByTagName('body')[0];
const app = document.createElement('div');
app.setAttribute('id', 'app');
body.insertBefore(app, body.firstChild);

new Vue({
    el: '#app',
    render: h => h(App),
});
