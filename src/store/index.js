import Vuex from 'vuex'; // 상태관리 도구
import { fetchNewsList } from '../api/index.js';

export const store = new Vuex.Store({
    state:{
        news: []
    },   
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        }
    },
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response =>{
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error =>{
                    console.log(error);
                });
        }
    }
})