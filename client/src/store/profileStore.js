import { fetchProfile } from "@/http/postAPI";

export default {
  state: () => ({
    profiles: [],
  }),
  getters: {
  },
  mutations: {
  },
  actions: {
    async getProfilePerId (id) {
      fetchProfile(id).then((data) => {
        return data;
      })
    }
  },
}
