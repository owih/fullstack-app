import { userCheck, userLogin, userRegistration } from "@/http/userAPI";
import router from "@/router";
import { notify } from "@kyvg/vue3-notification";

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
          notify({
            title: 'User ' + login + ' was created!',
            type: 'success'
          })
        })
        .catch((e) => {
          notify({
            title: e.response.data.message,
            type: 'error'
          })
        })
    },
    async loginUser ({ commit }, { email, password }) {
      userLogin(email, password)
        .then((data) => {
          commit('SET_USER', data);
          commit('SET_USER_AUTH');
          router.push('/');
        })
        .catch((e) => {
          notify({
            title: e.response.data.message,
            type: 'error'
          })
        })
    },
    async checkIsAuthorized ({ commit }) {
      userCheck().then((data) => {
        commit('SET_USER', data);
        commit('SET_USER_AUTH');
      })
        .catch(() => {
          commit('LOGOUT_USER');
        })
        .finally(() => commit('LOAD_IS_ENDED'));
    },
    logoutUser ({ commit }) {
      commit('LOGOUT_USER');
    }
  },
}
