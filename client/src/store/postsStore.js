import { createPost, fetchPost, fetchPosts } from "@/http/postAPI";
import { notify } from "@kyvg/vue3-notification";

export default {
  state: () => ({
    currentProfilePosts: [],
    posts: [],
    post: {},
  }),
  getters: {
    // TODO: Переделать без создания нового массива
    getAllPosts (state) {
      return state.posts.map((item) => item).reverse()
    },
    getCurrentProfilePosts (state) {
      return state.currentProfilePosts.map((item) => item).reverse();
    },
    getPost (state) {
      return state.post;
    }
  },
  mutations: {
    SET_ALL_POSTS (state, posts) {
      state.posts = posts;
    },
    SET_CURRENT_PROFILE_POSTS (state, posts) {
      state.currentProfilePosts = posts;
    },
    SET_ACTIVE_POST (state, post) {
      state.post = post;
    },
    ADD_NEW_POST (state, post) {
      state.currentProfilePosts.push(post);
    },
    CLEAR_POST_STATE (state) {
      state.post = {};
    },
    CLEAR_POSTS_STATE (state) {
      state.currentProfilePosts = [];
    }
  },
  actions: {
    fetchAllPosts ({ commit }, { page, limit }) {
      fetchPosts({ page, limit })
        .then((posts) => {
          commit('SET_ALL_POSTS', posts.rows);
        })
        .catch((e) => {
          notify({
            title: e.message,
            type: 'error'
          })
        })
    },
    fetchPostsPerCurrentProfile ({ commit }, profileId) {
      fetchPosts({ profileId })
        .then((posts) => {
          commit('SET_CURRENT_PROFILE_POSTS', posts.rows);
        })
        .catch((e) => {
          notify({
            title: e.message,
            type: 'error'
          })
        })
    },
    createPost ({ commit }, postData) {
      createPost(postData).then((data) => data)
        .then((post) => {
          commit('ADD_NEW_POST', post);
          notify({
            title: 'Post created',
            type: 'success'
          })
        })
        .catch((error) => {
          notify({
            title: error.message,
            type: 'error'
          })
        })
    },
    async fetchPostPerId ({ commit }, id) {
      return new Promise((resolve, reject) => {
        fetchPost(id)
          .then((post) => {
            commit('SET_ACTIVE_POST', post);
            resolve(post);
          })
          .catch((error) => {
            reject(error);
            notify({
              title: error.message,
              type: 'error'
            })
          })
      })
    },
    clearCurrentPostState ({ commit }) {
      commit('CLEAR_POST_STATE');
    },
    clearPostsState ({ commit }) {
      commit('CLEAR_POSTS_STATE');
    }
  },
}
