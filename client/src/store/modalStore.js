export default {
  state: () => ({
    open: [],
  }),
  getters: {
    active (state) { return state.open.length > 0 ? state.open[0] : null },
    allOpen (state) { return state.open }
  },
  mutations: {
    OPEN (state, id) { state.open.unshift(id) },
    CLOSE (state, id) { state.open = state.open.filter((item) => item !== id) }
  },
  actions: {
    open ({ commit }, id) { commit('OPEN', id) },
    close ({ commit }, id) { commit('CLOSE', id) }
  },
}
