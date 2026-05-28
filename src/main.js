import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'
import CategoriaView from './views/CategoriaView.vue'
import HomeView from './views/HomeView.vue'
import NoticiasView from './views/NoticiasView.vue'
import NoticiaView from './views/NoticiaView.vue'
import JazzSinfonicaView from './views/JazzSinfonicaView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/noticias', component: NoticiasView },
    { path: '/noticias/:id', component: NoticiaView },
    { path: '/categoria/:slug', component: CategoriaView },
    { path: '/jazz-sinfonica', component: JazzSinfonicaView },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')