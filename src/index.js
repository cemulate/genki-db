import './styles/theme.scss';
import Vue from 'vue';
import App from './components/App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckSquare);
library.add(faSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: '#app',
    render: h => h(App),
});
