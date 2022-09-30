import { createStore } from 'vuex'
import userStore from "@/store/userStore";
import postsStore from "@/store/postsStore";
import modalStore from "@/store/modalStore";
import profileStore from "@/store/profileStore";

export default createStore({
  modules: {
    user: userStore,
    posts: postsStore,
    modals: modalStore,
    profile: profileStore
  }
})
