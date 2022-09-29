import { createStore } from 'vuex'
import userStore from "@/store/userStore";
import postsStore from "@/store/postsStore";
import modalStore from "@/store/modalStore";

export default createStore({
  modules: {
    user: userStore,
    posts: postsStore,
    modals: modalStore,
  }
})
