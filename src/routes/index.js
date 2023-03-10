import { createWebHistory, createRouter } from "vue-router";
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'

const routes= [
    {
        path : '/',
        redirect : '/news'
    },
    {
        // path : url 주소
        path : '/news',
        // componetn : url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView,
    },
    {
        path : '/jobs',
        component: JobsView,
    },
    {
        path : '/ask',
        component: AskView,
    },
    {
        path : '/user',
        component: UserView
    },
    {
        path : '/item',
        component: ItemView
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {router}