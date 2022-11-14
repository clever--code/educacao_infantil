import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('components/layouts/LayoutDefault.vue'),
    children: [
      { path: 'jogos', component: () => import('components/games/GamesPage.vue') },
      { path: 'jogos/matematica', component: () => import('components/math/MathPage.vue') }
    ]
  }
]

export default routes
