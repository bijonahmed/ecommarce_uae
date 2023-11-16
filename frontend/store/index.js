// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    // other state properties
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    // other mutations
  },
  actions: {
    login({ commit }, user) {
      // your login logic, API calls, etc.
      commit('setUser', user);
    },
    logout({ commit }) {
      // your logout logic, API calls, etc.
      commit('setUser', null);
    },
    // other actions
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    // other getters
  },
});

export default function () {
  return store;
}
