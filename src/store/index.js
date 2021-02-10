import Vue from 'vue'
import Vuex from 'vuex'
import mock from '../mock/index'

Vue.use(Vuex)
const data = mock.data;
const types = ["体育", "3A", "冒险"];
const os = ["Windows", "MacOs"];
const levels = ["12+", "16+", "18+"];
const map = {};
data.forEach((item, index) => {
  map[item.name] = index;
})


export default new Vuex.Store({
  state: {
    data,
    types,
    os,
    levels,
    game : {},
    isEditable: false,
  },
  mutations: {
    view: function(state, payload) {
      console.log('here is in the store',payload)
      state.game = payload;
      state.isEditable = false
      console.log(this.state)
    },
    edit: function(state, payload) {
      console.log('here is in the store',payload)
      state.game = payload
      state.isEditable = true
      console.log(this.state)
    },
    submit: function(state, payload) {
      const { name } = payload;
      const index = map[name];
      state.data[index] = payload;
      console.log(state)
    },
    upload: function(state, payload) {
      const url = payload
      state.game.pic = url;
      console.log(state.game)
    }

  },
  actions: {
  },
  modules: {
  }
})
