import { createRouter, createWebHistory } from 'vue-router'
import AlbumDetails from '../views/AlbumDetails.vue'
import Album from '../views/Album.vue'
import BeritaDetails from '../views/BeritaDetails.vue'
import Berita from '../views/Berita.vue'
import Landing from '../views/Landing.vue';
import NotFound from '../views/NotFound.vue';
import OurTeam from '../views/OurTeam.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/:id',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/album/:title',
    name: 'AlbumDetails',
    component: AlbumDetails,
    params: true
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita
  },
  {
    path: '/berita/:slug',
    name: 'BeritaDetails',
    component: BeritaDetails,
    params: true
  },
  {
    path: '/ourteam',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/coba',
    name: 'Coba',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router