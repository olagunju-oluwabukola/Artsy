import './assets/main.css'


import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch,faShoppingCart,faBell, faBars, faSortDown,faHeart} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faShoppingCart, faBell, faBars, faSortDown,faHeart)



const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
