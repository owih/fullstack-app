import { putNewProfileData, fetchProfile, fetchProfiles, fetchProfilesPerName } from '@/http/profileAPI';
import { notify } from '@kyvg/vue3-notification';

export default {
  state: () => ({
    userProfile: {},
    postOwnerProfile: {},
    currentProfile: {},
    profiles: [],
    searchedProfiles: [],
  }),
  getters: {
    getCurrentProfileData (state) {
      return state.currentProfile ? state.currentProfile : null;
    },
    getAllProfiles (state) {
      return state.profiles;
    },
    getUserProfile (state) {
      return state.userProfile;
    },
    getSearchedProfiles (state) {
      return state.searchedProfiles;
    },
    getPostOwnerProfile (state) {
      return state.postOwnerProfile;
    },
  },
  mutations: {
    SET_CURRENT_PROFILE_DATA (state, data) {
      state.currentProfile = data;
    },
    SET_POST_OWNER_DATA (state, data) {
      state.postOwnerProfile = data;
    },
    SET_SEARCHED_PROFILES (state, data) {
      state.searchedProfiles = data;
    },
    SET_USER_PROFILE (state, data) {
      state.userProfile = data;
    },
    SET_ALL_PROFILES (state, data) {
      state.profiles = data;
    },
    CLEAR_PROFILE_STATE (state) {
      state.currentProfile = {};
    },
    CLEAR_USER_PROFILE_STATE (state) {
      state.userProfile = {};
    },
    CLEAR_PROFILES (state) {
      state.profiles = [];
      state.searchedProfiles = [];
    },
    CLEAR_PROFILES_STATE (state) {
      state.currentProfile = {};
      state.postOwnerProfile = {};
      state.userProfile = {};
    },
  },
  actions: {
    clearProfileState ({ commit }) {
      commit('CLEAR_PROFILES_STATE');
    },
    async fetchCurrentProfilePerId ({ commit }, id) {
      fetchProfile(id)
        .then((data) => {
          commit('SET_CURRENT_PROFILE_DATA', data)
        })
        .catch((e) => {
          notify({
            title: e.message,
            type: 'error'
          })
        })
    },
    async fetchUserProfilePerId ({ commit }, id) {
      fetchProfile(id)
        .then((data) => {
          commit('SET_USER_PROFILE', data)
        })
        .catch((e) => {
          notify({
            title: e.message,
            type: 'error'
          })
        })
    },
    async fetchProfilesPerName ({ commit }, { page, limit, name }) {
      return new Promise((resolve, reject) => {
        fetchProfilesPerName(page, limit, name)
          .then((data) => {
            commit('SET_SEARCHED_PROFILES', data.rows);
            resolve(data.count);
          })
          .catch((e) => {
            notify({
              title: e.message,
              type: 'error'
            })
            reject(e);
          })
      })
    },
    async fetchProfilePerPostOwner ({ commit }, id) {
      fetchProfile(id)
        .then((data) => {
          commit('SET_POST_OWNER_DATA', data)
        })
        .catch((e) => {
          notify({
            title: e.message,
            type: 'error'
          })
        })
    },
    async updateProfileData ({ commit }, { userId, formData }) {
      putNewProfileData(userId, formData)
        .then((data) => {
          commit('SET_CURRENT_PROFILE_DATA', data)
          notify({
            title: 'Profile with id: ' + userId + ', successfully updated',
            type: 'success'
          })
        })
        .catch((e) => {
          notify({
            title: e.message,
            type: 'error'
          })
        })
    },
    async fetchAllProfilesList ({ commit }, { page, limit }) {
      return new Promise((resolve, reject) => {
        fetchProfiles(page, limit)
          .then((data) => {
            commit('SET_ALL_PROFILES', data.rows);
            resolve(data.count);
          })
          .catch((e) => {
            notify({
              title: e.message,
              type: 'error'
            })
            reject(e);
          })
      })
    },
    clearCurrentProfileState ({ commit }) {
      commit('CLEAR_PROFILE_STATE');
    },
    clearUserProfileState ({ commit }) {
      commit('CLEAR_USER_PROFILE_STATE');
    },
    clearProfiles ({ commit }) {
      commit('CLEAR_PROFILES');
    }
  },
}
