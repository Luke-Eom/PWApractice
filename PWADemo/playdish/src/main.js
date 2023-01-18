import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from '.plugins/vuetify';

import {rtdbPlugin} from 'vuefire'
VueElement.use(rtdbPlugin);

VueElement.config.productionTip = false

new VueElement({
    vuetify,
    render: h => h(App),
}).$mount('#app')

//createApp(App).mount('#app')
