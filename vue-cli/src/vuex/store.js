import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {//存数据
    num:1,
    x:5
}
const mutations = {//改数据
    add(state){
        state.num++;
    },
    sub(state,n){
        state.num-=n;
    }
}
const getters = {
    count(state){
        return state.num +100;
    }
}
const actions = {
    actionsAdd({commit}){
        setTimeout(function(){
            commit('add')
        },1000)
    }

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions  
})