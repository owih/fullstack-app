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
    setUserAuth (state) {
      state.isAuth = true;
    },
    setUserNotAuth (state) {
      state.isAuth = false;
    },
    setUser (state, data) {
      state.user = data;
    }
  },
  actions: {
  },
  modules: {
  }
}
