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
    ADD_NEW_POST (state, post) {
      state.posts.push(post);
    }
  },
  actions: {
    fetchAllPosts ({ commit }, profileId) {
      fetchPosts(profileId).then((posts) => {
        commit('SET_ALL_POSTS', posts.rows);
      })
    },
    createPost ({ commit }, postData) {
      createPost(postData).then((data) => data)
        .then((post) => commit('ADD_NEW_POST', post))
        .catch((error) => error)
    },
    async getPostPerId ({ commit }, id) {
      fetchPost(id).then((post) => {
        commit('SET_ACTIVE_POST', post);
      })
    },
  },
}
