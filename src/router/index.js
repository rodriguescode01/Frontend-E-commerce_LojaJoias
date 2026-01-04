// Aqui no index eu vou esta criando as rotas declaradas em minha pasta routers

import { createRouter, createWebHistory } from 'vue-router'
import LoginRouters from './LoginRouters'
import HomeRouters from './HomeRouters'

const routes = [...LoginRouters, ...HomeRouters]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
