const state = {
  owner: ''
}

const actions = {
  setOwner: ({ commit }, payload) => {
    commit('SET_OWNER', payload)
  }
}

const mutations = {
  SET_OWNER (state, payload) {
    state.owner = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
