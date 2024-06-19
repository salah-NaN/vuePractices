import { createMemoryHistory, createRouter } from 'vue-router'

import HomePeopleView from '../views/HomePeopleView.vue'
import PersonView from '../views/PersonView.vue'

const routes = [
    { path: '/', component: HomePeopleView },
    { path: '/person/:id', component: PersonView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;