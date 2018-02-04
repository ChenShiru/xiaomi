import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    bgcolor:'red',
    title:''
}
const mutations ={
    change(state,bgcolor){  //只能传一个 参数
        state.bgcolor = bgcolor;
    },
    changeTitle(state,title){
        state.title = title;
    }
}
export default new Vuex.Store({
    state,
    mutations
})

