import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        count:0,
    },
    mutations:{
        addCount(state){
            state+=1;
        }
    }
    ,
    
    
});

export default store;