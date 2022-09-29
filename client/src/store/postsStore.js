import { createPost, fetchPosts } from "@/http/profileAPI";

export default {
  state: () => ({
    posts: [],
  }),
  getters: {
    getAllPosts (state) {
    },
    getPost (state) {
    }
  },
  mutations: {
    SET_ALL_POSTS (state, posts) {
      state.posts = posts;
    },
    ADD_NEW_POST (state) {
    }
  },
  actions: {
    fetchAllPosts ({ commit }) {
      console.log('fetch started')
      fetchPosts().then((posts) => {
        commit('SET_ALL_POSTS', posts.rows);
      })
    },
    createPost ({ commit }, description, img, profileId) {
      createPost(description, img, profileId).then((data) => data)
        .catch((error) => error)
    }
  },
}
