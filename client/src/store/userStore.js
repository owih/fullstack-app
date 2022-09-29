export default {
  state: () => ({
    isAuth: false,
    user: {},
  }),
  getters: {
    getIsAuth (state) {
      return state.isAuth;
    },
    getUser (state) {
      return state.user;
    }
  },
  mutations: {
    SET_USER_AUTH (state) {
      state.isAuth = true;
    },
    SET_USER_NOT_AUTH (state) {
      state.isAuth = false;
    },
    SET_USER (state, data) {
      state.user = data;
    }
  },
  actions: {
    setUserAuth ({ commit }) {
      commit('SET_USER_AUTH')
    },
    setUserNotAuth ({ commit }) {
      commit('SET_USER_NOT_AUTH');
    },
    setUser ({ commit }, data) {
      commit('SET_USER', data);
    },
  },
}
