import { userCheck, userLogin, userRegistration } from "@/http/userAPI";
import router from "@/router";

export default {
  state: () => ({
    isAuth: false,
    user: {},
    isLoaded: false,
  }),
  getters: {
    getIsAuth (state) {
      return state.isAuth;
    },
    getUser (state) {
      return state.user;
    },
    getLoadedState (state) {
      return state.isLoaded;
    }
  },
  mutations: {
    SET_USER_AUTH (state) {
      state.isAuth = true;
    },
    SET_USER (state, data) {
      state.user = data;
    },
    LOAD_IS_ENDED (state) {
      state.isLoaded = true;
    },
    LOGOUT_USER (state) {
      state.isAuth = false;
      state.user = {};
    }
  },
  actions: {
    async registrationUser ({ commit }, { email, password, login }) {
      userRegistration(email, password, login)
        .then((data) => {
          commit('SET_USER', data);
          commit('SET_USER_AUTH');
          router.push('/');
        })
        .catch((error) => console.log(error));
    },
    async loginUser ({ commit }, { email, password }) {
      userLogin(email, password)
        .then((data) => {
          commit('SET_USER', data);
          commit('SET_USER_AUTH');
          router.push('/');
        })
        .catch((error) => console.log(error));
    },
    async checkIsAuthorized ({ commit }) {
      userCheck().then((data) => {
        commit('SET_USER', data);
        commit('SET_USER_AUTH');
      })
        .catch((error) => {
          commit('LOGOUT_USER');
          console.log(error.response.data.message)
        })
        .finally(() => commit('LOAD_IS_ENDED'));
    },
    logoutUser ({ commit }) {
      commit('LOGOUT_USER');
    }
  },
}
