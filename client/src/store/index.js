import { createStore } from 'vuex'
import userStore from "@/store/userStore";

export default createStore({
  modules: {
    user: userStore,
  }
})
