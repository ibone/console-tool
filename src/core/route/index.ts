import { createRouter, createWebHashHistory } from 'vue-router'
import ConsoleToolPage from '@feature/console-tool/pages/index.vue'
// import HelloWorldVue from '../../components/HelloWorld.vue'

const routes = [
  { path: '/', component: ConsoleToolPage },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})