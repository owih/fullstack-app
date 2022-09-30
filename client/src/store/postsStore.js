import { createPost, fetchPost, fetchPosts } from "@/http/postAPI";

export default {
  state: () => ({
    posts: [],
    post: {},
  }),
  getters: {
    getAllPosts (state) {
      return state.posts;
    },
    getPost (state) {
      return state.post;
    }
  },
  mutations: {
    SET_ALL_POSTS (state, posts) {
      state.posts = posts;
      console.log(posts)
    },
    SET_ACTIVE_POST (state, post) {
      state.post = post;
      console.log(post)
    },
    ADD_NEW_POST (state) {
    }
  },
  actions: {
    async fetchAllPosts ({ commit }) {
      fetchPosts().then((posts) => {
        commit('SET_ALL_POSTS', posts.rows);
      })
    },
    createPost ({ commit }, description, img, profileId) {
      createPost(description, img, profileId).then((data) => data)
        .catch((error) => error)
    },
    async getPostPerId ({ commit }, id) {
      fetchPost(id).then((post) => {
        commit('SET_ACTIVE_POST', post);
      })
    },
  },
}
