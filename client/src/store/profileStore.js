import { putNewProfileData, fetchProfile, fetchProfiles } from "@/http/profileAPI";

export default {
  state: () => ({
    postOwnerProfile: {},
    currentProfile: {},
    profiles: [],
  }),
  getters: {
    getCurrentProfileData (state) {
      return state.currentProfile ? state.currentProfile : null;
    },
    getAllProfiles (state) {
      return state.profiles;
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
    SET_ALL_PROFILES (state, data) {
      state.profiles = data;
    },
    CLEAR_PROFILE_STATE (state) {
      state.currentProfile = {};
    }
  },
  actions: {
    async fetchCurrentProfilePerId ({ commit }, id) {
      fetchProfile(id)
        .then((data) => {
          console.log(data)
          commit('SET_CURRENT_PROFILE_DATA', data)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async fetchProfilePerPostOwner ({ commit }, id) {
      fetchProfile(id)
        .then((data) => {
          console.log(data)
          commit('SET_POST_OWNER_DATA', data)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async updateProfileData ({ commit }, { userId, formData }) {
      putNewProfileData(userId, formData)
        .then((data) => {
          console.log(data)
          commit('SET_CURRENT_PROFILE_DATA', data)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async fetchAllProfilesList ({ commit }, { page, limit }) {
      return new Promise((resolve, reject) => {
        fetchProfiles(page, limit)
          .then((data) => {
            commit('SET_ALL_PROFILES', data.rows);
            resolve(data.count);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          })
      })
    },
    clearCurrentProfileState ({ commit }) {
      commit('CLEAR_PROFILE_STATE');
    }
  },
}
